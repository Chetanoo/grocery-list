export interface EntryInterface {
    id: string
    priority: number
    status: string
    statusChanged: Date
    name: string
    statusHistory: Array<StatusHistoryItem>
}

export interface StatusHistoryItem {
    status: string,
    statusChanged: Date
}
