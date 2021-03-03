class Methods {
  public getDay(timestamp: number) {
    console.log(timestamp)
    const time = new Date(timestamp)
    let times = ''
    const month = time.getMonth() + 1
    times =
      time.getFullYear() +
      '-' +
      '0'.padEnd(2, month.toString()) +
      '0'.padEnd(2, time.getDay().toString())
    return times
  }
}

export default Methods
