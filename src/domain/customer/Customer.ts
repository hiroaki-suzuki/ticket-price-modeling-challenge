import { Age } from "./Age";
import { Certificates } from "./Certificates";
import { CertificateTypes } from "./CertificateTypes";
import { Gender } from "./Gender";

export class Customer {
  private readonly _age: Age;
  private readonly _gender: Gender;
  private readonly _certificates: Certificates;

  constructor(age: number, gender: Gender, certificateTypes: CertificateTypes[] = []) {
    this._age = new Age(age);
    this._gender = gender;
    this._certificates = new Certificates(certificateTypes);
  }

  public age(): Age {
    return this._age;
  }

  public gender(): Gender {
    return this._gender;
  }

  public certificates() {
    return this._certificates;
  }
}
