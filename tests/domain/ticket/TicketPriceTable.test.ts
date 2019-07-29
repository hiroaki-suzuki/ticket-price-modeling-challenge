import { CertificateTypes } from "../../../src/domain/customer/CertificateTypes";
import { Customer } from "../../../src/domain/customer/Customer";
import { Gender } from "../../../src/domain/customer/Gender";
import { Screen } from "../../../src/domain/theater/Screen";
import { TicketPriceTable } from "../../../src/domain/ticket/TicketPriceTable";
import { TicketTypes } from "../../../src/domain/ticket/TicketType";

describe("チケット料金表", () => {
  /* tslint:disable:max-line-length */
  test.each`
    age    | certificateTypes                                 | screenDate                   | expectedTicketType                         | expectedPrice
    ${59}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.CinemaCitizen}                | ${1000}
    ${59}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.CinemaCitizen}                | ${1000}
    ${59}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.CinemaCitizen}                | ${1300}
    ${59}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.CinemaCitizen}                | ${1000}
    ${59}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.CinemaCitizen}                | ${1000}
    ${59}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.CinemaCitizen}                | ${1000}
    ${59}  | ${[CertificateTypes.MembersCard]}                | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.CinemaCitizen}                | ${1100}
    ${59}  | ${[CertificateTypes.MembersCard]}                | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.CinemaCitizen}                | ${1000}

    ${60}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.CinemaCitizenSenior}          | ${1000}
    ${60}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.CinemaCitizenSenior}          | ${1000}
    ${60}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.CinemaCitizenSenior}          | ${1000}
    ${60}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.CinemaCitizenSenior}          | ${1000}
    ${60}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.CinemaCitizenSenior}          | ${1000}
    ${60}  | ${[CertificateTypes.MembersCard]}                | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.CinemaCitizenSenior}          | ${1000}
    ${60}  | ${[CertificateTypes.MembersCard]}                | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.CinemaCitizenSenior}          | ${1000}
    ${60}  | ${[CertificateTypes.MembersCard]}                | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.CinemaCitizenSenior}          | ${1000}

    ${69}  | ${[]}                                            | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.General}                      | ${1800}
    ${69}  | ${[]}                                            | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.General}                      | ${1300}
    ${69}  | ${[]}                                            | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.General}                      | ${1800}
    ${69}  | ${[]}                                            | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.General}                      | ${1300}
    ${69}  | ${[]}                                            | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.General}                      | ${1100}
    ${69}  | ${[]}                                            | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.General}                      | ${1100}
    ${69}  | ${[]}                                            | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.General}                      | ${1100}
    ${69}  | ${[]}                                            | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.General}                      | ${1100}

    ${70}  | ${[]}                                            | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.Senior}                       | ${1100}
    ${70}  | ${[]}                                            | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.Senior}                       | ${1100}
    ${70}  | ${[]}                                            | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.Senior}                       | ${1100}
    ${70}  | ${[]}                                            | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.Senior}                       | ${1100}
    ${70}  | ${[]}                                            | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.Senior}                       | ${1100}
    ${70}  | ${[]}                                            | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.Senior}                       | ${1100}
    ${70}  | ${[]}                                            | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.Senior}                       | ${1100}
    ${70}  | ${[]}                                            | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.Senior}                       | ${1100}

    ${20}  | ${[CertificateTypes.StudentIdentificationCard]}  | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.UniversityStudent}            | ${1500}
    ${20}  | ${[CertificateTypes.StudentIdentificationCard]}  | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.UniversityStudent}            | ${1300}
    ${20}  | ${[CertificateTypes.StudentIdentificationCard]}  | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.UniversityStudent}            | ${1500}
    ${20}  | ${[CertificateTypes.StudentIdentificationCard]}  | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.UniversityStudent}            | ${1300}
    ${20}  | ${[CertificateTypes.StudentIdentificationCard]}  | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.UniversityStudent}            | ${1100}
    ${20}  | ${[CertificateTypes.StudentIdentificationCard]}  | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.UniversityStudent}            | ${1100}
    ${20}  | ${[CertificateTypes.StudentIdentificationCard]}  | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.UniversityStudent}            | ${1100}
    ${20}  | ${[CertificateTypes.StudentIdentificationCard]}  | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.UniversityStudent}            | ${1100}

    ${16}  | ${[CertificateTypes.StudentHandbook]}            | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.JuniorAndHighSchoolStudent}   | ${1000}
    ${16}  | ${[CertificateTypes.StudentHandbook]}            | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.JuniorAndHighSchoolStudent}   | ${1000}
    ${16}  | ${[CertificateTypes.StudentHandbook]}            | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.JuniorAndHighSchoolStudent}   | ${1000}
    ${16}  | ${[CertificateTypes.StudentHandbook]}            | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.JuniorAndHighSchoolStudent}   | ${1000}
    ${16}  | ${[CertificateTypes.StudentHandbook]}            | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.JuniorAndHighSchoolStudent}   | ${1000}
    ${16}  | ${[CertificateTypes.StudentHandbook]}            | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.JuniorAndHighSchoolStudent}   | ${1000}
    ${16}  | ${[CertificateTypes.StudentHandbook]}            | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.JuniorAndHighSchoolStudent}   | ${1000}
    ${16}  | ${[CertificateTypes.StudentHandbook]}            | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.JuniorAndHighSchoolStudent}   | ${1000}

    ${12}  | ${[]}                                            | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.UnderElementarySchoolStudent} | ${1000}
    ${12}  | ${[]}                                            | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.UnderElementarySchoolStudent} | ${1000}
    ${12}  | ${[]}                                            | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.UnderElementarySchoolStudent} | ${1000}
    ${12}  | ${[]}                                            | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.UnderElementarySchoolStudent} | ${1000}
    ${12}  | ${[]}                                            | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.UnderElementarySchoolStudent} | ${1000}
    ${12}  | ${[]}                                            | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.UnderElementarySchoolStudent} | ${1000}
    ${12}  | ${[]}                                            | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.UnderElementarySchoolStudent} | ${1000}
    ${12}  | ${[]}                                            | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.UnderElementarySchoolStudent} | ${1000}

    ${19}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.DisabilityOverStudent}        | ${1000}
    ${19}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.DisabilityOverStudent}        | ${1000}
    ${19}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.DisabilityOverStudent}        | ${1000}
    ${19}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.DisabilityOverStudent}        | ${1000}
    ${19}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.DisabilityOverStudent}        | ${1000}
    ${19}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.DisabilityOverStudent}        | ${1000}
    ${19}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.DisabilityOverStudent}        | ${1000}
    ${19}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.DisabilityOverStudent}        | ${1000}

    ${18}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.DisabilityUnderHighSchool}    | ${900}
    ${18}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.DisabilityUnderHighSchool}    | ${900}
    ${18}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.DisabilityUnderHighSchool}    | ${900}
    ${18}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.DisabilityUnderHighSchool}    | ${900}
    ${18}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/01(木) 19:59:59"} | ${TicketTypes.DisabilityUnderHighSchool}    | ${900}
    ${18}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/08/01(木) 20:00:00"} | ${TicketTypes.DisabilityUnderHighSchool}    | ${900}
    ${18}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/06/01(土) 19:59:59"} | ${TicketTypes.DisabilityUnderHighSchool}    | ${900}
    ${18}  | ${[CertificateTypes.DisabilityHandbook]}         | ${"2019/06/01(土) 20:00:00"} | ${TicketTypes.DisabilityUnderHighSchool}    | ${900}

    ${36}  | ${[CertificateTypes.MICard]}                     | ${"2019/08/02(金) 19:59:59"} | ${TicketTypes.MICard}                       | ${1600}
    ${36}  | ${[CertificateTypes.MICard]}                     | ${"2019/08/02(金) 20:00:00"} | ${TicketTypes.MICard}                       | ${1300}
    ${36}  | ${[CertificateTypes.MICard]}                     | ${"2019/08/03(土) 19:59:59"} | ${TicketTypes.MICard}                       | ${1600}
    ${36}  | ${[CertificateTypes.MICard]}                     | ${"2019/08/03(土) 20:00:00"} | ${TicketTypes.MICard}                       | ${1300}
  `
  /* tslint:enable:max-line-length */
  ("$age歳、証明証$certificateTypes、$screenDateの場合は、種別は$expectedTicketType、料金は$expectedPrice円",
      ({ age, certificateTypes, screenDate, expectedTicketType, expectedPrice }) => {
        const customer = new Customer(age, Gender.man, certificateTypes);
        const screen = new Screen(new Date(screenDate));
        const orderCriteria = { customer, screen };

        const ticketPriceTable = new TicketPriceTable();
        const ticket = ticketPriceTable.findTicket(orderCriteria);

        expect(ticket.ticketType()).toBe(expectedTicketType);
        expect(ticket.price().amount()).toBe(expectedPrice);
      },
  );
});
