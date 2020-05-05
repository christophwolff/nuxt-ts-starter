export * from '~/types/state.ts'

export interface Station {
  id: Number
  name: string
  brandingColor: string
  colors(product: 'BR_Radio'): string
  logoUrl: string
  logoSquareUrl: string
  // livestreams: Stream
  // currentEpg: Broadcast
}
