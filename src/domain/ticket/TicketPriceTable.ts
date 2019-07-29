import { OrderCriteria } from "../order/OrderCriteria";
import { CinemaCitizenSeniorSpecification } from "./Specification/CinemaCitizenSeniorSpecification";
import { CinemaCitizenSpecification } from "./Specification/CinemaCitizenSpecification";
import { DisabilityOverStudentSpecification } from "./Specification/DisabilityOverStudentSpecification";
import { DisabilityUnderHighSchoolSpecification } from "./Specification/DisabilityUnderHighSchoolSpecification";
import { GeneralSpecification } from "./Specification/GeneralSpecification";
import { HolidaySpecification } from "./Specification/HolidaySpecification";
import { JuniorAndHighSchoolStudentSpecification } from "./Specification/JuniorAndHighSchoolStudentSpecification";
import { LateShowSpecification } from "./Specification/LateShowSpecification";
import { MICardSpecification } from "./Specification/MICardSpecification";
import { MovieDaySpecification } from "./Specification/MovieDaySpecification";
import { NormalTimeShowSpecification } from "./Specification/NormalTimeShowSpecification";
import { SeniorSpecification } from "./Specification/SeniorSpecification";
import { TicketSpecification } from "./Specification/TicketSpecification";
import { UnderElementarySchoolStudentSpecification } from "./Specification/UnderElementarySchoolStudentSpecification";
import { UniversityStudentSpecification } from "./Specification/UniversityStudentSpecification";
import { WeekdaySpecification } from "./Specification/WeekdaySpecification";
import { Ticket } from "./Ticket";
import { TicketTypes } from "./TicketType";

interface Item {
  ticket: Ticket;
  ticketSpecification: TicketSpecification;
}

export class TicketPriceTable {
  private readonly items: Item[] = [];

  constructor() {
    this.addItemsCinemaCitizen();
    this.addItemsCinemaCitizenSenior();
    this.addItemsGeneral();
    this.addItemsSenior();
    this.addItemsUniversityStudent();
    this.addItemsJuniorAndHighSchoolStudent();
    this.addItemsUnderElementarySchoolStudent();
    this.addItemsDisabilityOverStudent();
    this.addItemsDisabilityUnderHighSchool();
    this.addItemsMICard();
  }

  public findTicket(orderCriteria: OrderCriteria): Ticket {
    return this.items.filter((item) => {
      return item.ticketSpecification.isSatisfiedBy(orderCriteria);
    }).map((item) => {
      return item.ticket;
    }).reduce((previousMinPriceTicket, currentTicket) => {
      if (previousMinPriceTicket.price().lowerThan(currentTicket.price())) {
        return previousMinPriceTicket;
      }
      return currentTicket;
    });
  }

  private addItemsCinemaCitizen() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(new CinemaCitizenSpecification(), TicketTypes.CinemaCitizen, 1000);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(new CinemaCitizenSpecification(), TicketTypes.CinemaCitizen, 1000);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(new CinemaCitizenSpecification(), TicketTypes.CinemaCitizen, 1300);
    // 土日、20時〜
    this.addHolidayLateShowAnd(new CinemaCitizenSpecification(), TicketTypes.CinemaCitizen, 1000);
    // 映画の日
    this.addMovieDayAnd(new CinemaCitizenSpecification(), TicketTypes.CinemaCitizen, 1100);
  }

  private addItemsCinemaCitizenSenior() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(new CinemaCitizenSeniorSpecification(), TicketTypes.CinemaCitizenSenior, 1000);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(new CinemaCitizenSeniorSpecification(), TicketTypes.CinemaCitizenSenior, 1000);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(new CinemaCitizenSeniorSpecification(), TicketTypes.CinemaCitizenSenior, 1000);
    // 土日、20時〜
    this.addHolidayLateShowAnd(new CinemaCitizenSeniorSpecification(), TicketTypes.CinemaCitizenSenior, 1000);
    // 映画の日
    this.addMovieDayAnd(new CinemaCitizenSeniorSpecification(), TicketTypes.CinemaCitizenSenior, 1000);
  }

  private addItemsGeneral() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(new GeneralSpecification(), TicketTypes.General, 1800);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(new GeneralSpecification(), TicketTypes.General, 1300);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(new GeneralSpecification(), TicketTypes.General, 1800);
    // 土日、20時〜
    this.addHolidayLateShowAnd(new GeneralSpecification(), TicketTypes.General, 1300);
    // 映画の日
    this.addMovieDayAnd(new GeneralSpecification(), TicketTypes.General, 1100);
  }

  private addItemsSenior() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(new SeniorSpecification(), TicketTypes.Senior, 1100);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(new SeniorSpecification(), TicketTypes.Senior, 1100);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(new SeniorSpecification(), TicketTypes.Senior, 1100);
    // 土日、20時〜
    this.addHolidayLateShowAnd(new SeniorSpecification(), TicketTypes.Senior, 1100);
    // 映画の日
    this.addMovieDayAnd(new SeniorSpecification(), TicketTypes.Senior, 1100);
  }

  private addItemsUniversityStudent() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(new UniversityStudentSpecification(), TicketTypes.UniversityStudent, 1500);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(new UniversityStudentSpecification(), TicketTypes.UniversityStudent, 1300);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(new UniversityStudentSpecification(), TicketTypes.UniversityStudent, 1500);
    // 土日、20時〜
    this.addHolidayLateShowAnd(new UniversityStudentSpecification(), TicketTypes.UniversityStudent, 1300);
    // 映画の日
    this.addMovieDayAnd(new UniversityStudentSpecification(), TicketTypes.UniversityStudent, 1100);
  }

  private addItemsJuniorAndHighSchoolStudent() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(
        new JuniorAndHighSchoolStudentSpecification(), TicketTypes.JuniorAndHighSchoolStudent, 1000);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(
        new JuniorAndHighSchoolStudentSpecification(), TicketTypes.JuniorAndHighSchoolStudent, 1000);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(
        new JuniorAndHighSchoolStudentSpecification(), TicketTypes.JuniorAndHighSchoolStudent, 1000);
    // 土日、20時〜
    this.addHolidayLateShowAnd(
        new JuniorAndHighSchoolStudentSpecification(), TicketTypes.JuniorAndHighSchoolStudent, 1000);
    // 映画の日
    this.addMovieDayAnd(
        new JuniorAndHighSchoolStudentSpecification(), TicketTypes.JuniorAndHighSchoolStudent, 1000);
  }

  private addItemsUnderElementarySchoolStudent() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(
        new UnderElementarySchoolStudentSpecification(), TicketTypes.UnderElementarySchoolStudent, 1000);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(
        new UnderElementarySchoolStudentSpecification(), TicketTypes.UnderElementarySchoolStudent, 1000);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(
        new UnderElementarySchoolStudentSpecification(), TicketTypes.UnderElementarySchoolStudent, 1000);
    // 土日、20時〜
    this.addHolidayLateShowAnd(
        new UnderElementarySchoolStudentSpecification(), TicketTypes.UnderElementarySchoolStudent, 1000);
    // 映画の日
    this.addMovieDayAnd(
        new UnderElementarySchoolStudentSpecification(), TicketTypes.UnderElementarySchoolStudent, 1000);
  }

  private addItemsDisabilityOverStudent() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(
        new DisabilityOverStudentSpecification(), TicketTypes.DisabilityOverStudent, 1000);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(
        new DisabilityOverStudentSpecification(), TicketTypes.DisabilityOverStudent, 1000);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(
        new DisabilityOverStudentSpecification(), TicketTypes.DisabilityOverStudent, 1000);
    // 土日、20時〜
    this.addHolidayLateShowAnd(
        new DisabilityOverStudentSpecification(), TicketTypes.DisabilityOverStudent, 1000);
    // 映画の日
    this.addMovieDayAnd(
        new DisabilityOverStudentSpecification(), TicketTypes.DisabilityOverStudent, 1000);
  }

  private addItemsDisabilityUnderHighSchool() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(
        new DisabilityUnderHighSchoolSpecification(), TicketTypes.DisabilityUnderHighSchool, 900);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(
        new DisabilityUnderHighSchoolSpecification(), TicketTypes.DisabilityUnderHighSchool, 900);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(
        new DisabilityUnderHighSchoolSpecification(), TicketTypes.DisabilityUnderHighSchool, 900);
    // 土日、20時〜
    this.addHolidayLateShowAnd(
        new DisabilityUnderHighSchoolSpecification(), TicketTypes.DisabilityUnderHighSchool, 900);
    // 映画の日
    this.addMovieDayAnd(
        new DisabilityUnderHighSchoolSpecification(), TicketTypes.DisabilityUnderHighSchool, 900);
  }

  private addItemsMICard() {
    // 平日、〜20時
    this.addWeekdayNormalTimeShowAnd(new MICardSpecification(), TicketTypes.MICard, 1600);
    // 平日、20時〜
    this.addWeekdayLateShowAnd(new MICardSpecification(), TicketTypes.MICard, 1300);
    // 土日、〜20時
    this.addHolidayNormalTimeShowAnd(new MICardSpecification(), TicketTypes.MICard, 1600);
    // 土日、20時〜
    this.addHolidayLateShowAnd(new MICardSpecification(), TicketTypes.MICard, 1300);
  }

  private addWeekdayNormalTimeShowAnd(
      customerSpecification: TicketSpecification, ticketType: TicketTypes, price: number) {
    this.items.push({
      ticket: new Ticket(ticketType, price),
      ticketSpecification:
          customerSpecification
          .and(new WeekdaySpecification())
          .and(new NormalTimeShowSpecification()),
    });
  }

  private addWeekdayLateShowAnd(customerSpecification: TicketSpecification, ticketType: TicketTypes, price: number) {
    this.items.push({
      ticket: new Ticket(ticketType, price),
      ticketSpecification:
          customerSpecification
          .and(new WeekdaySpecification())
          .and(new LateShowSpecification()),
    });
  }

  private addHolidayNormalTimeShowAnd(
      customerSpecification: TicketSpecification, ticketType: TicketTypes, price: number) {
    this.items.push({
      ticket: new Ticket(ticketType, price),
      ticketSpecification:
          customerSpecification
          .and(new HolidaySpecification())
          .and(new NormalTimeShowSpecification()),
    });
  }

  private addHolidayLateShowAnd(customerSpecification: TicketSpecification, ticketType: TicketTypes, price: number) {
    this.items.push({
      ticket: new Ticket(ticketType, price),
      ticketSpecification:
          customerSpecification
          .and(new HolidaySpecification())
          .and(new LateShowSpecification()),
    });
  }

  private addMovieDayAnd(customerSpecification: TicketSpecification, ticketType: TicketTypes, price: number) {
    this.items.push({
      ticket: new Ticket(ticketType, price),
      ticketSpecification:
          customerSpecification
          .and(new MovieDaySpecification()),
    });
  }
}
