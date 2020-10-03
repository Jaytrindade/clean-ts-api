import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as null | MongoClient,
  uri: '' as '' | string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async reconnect (): Promise<void> {
    await this.connect(this.uri)
  },

  async disconnect (): Promise<void> {
    await this.client?.close()
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.reconnect()
      return this.getCollection(name)
    } else { return await this.client.db().collection(name) }
  },

  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
