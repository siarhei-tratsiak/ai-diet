export default class DateService {
  private static hoursInDay = 24
  private static minutesInHour = 60
  private static secondsInMinute = 60
  private static millisecondsInSecond = 1000
  private static daysInYear = 365.25
  private static millisecondsInDay =
    this.hoursInDay *
    this.minutesInHour *
    this.secondsInMinute *
    this.millisecondsInSecond

  public static millisecondsInYear = this.daysInYear * this.millisecondsInDay

  public static getToday() {
    const now = Date.now()

    return now - (now % this.millisecondsInDay)
  }
}
