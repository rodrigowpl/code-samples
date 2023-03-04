export enum SessionRecurrence {
  WEEKLY = 'WEEKLY',
  BI_WEEKLY = 'BI_WEEKLY',
  MONTHLY = 'MONTHLY'
}

export type SessionProps = {
  id: number
  publicId: string
  date: string
  seats: number
  freeSeats: number
  duration: number
  timezone: string
}

export type SessionDateProps = {
  id?: number
  date: string
  sessions: SessionProps[]
}

export type EventHostProps = {
  id: string
  name: string
  healine: string
  bio: string
  avatar?: string
  location: string
  company: {
    name: string
    logo: string
  }
  sessionsDates: SessionDateProps[]
}

export type PublicSessionProps = {
  id: number
  publicId: string
  date: string
  seats: number
  duration: number
  timezone: string
}
