import { CertificateTypes } from "./CertificateTypes";

export class Certificates {
  private readonly certificateTypes: CertificateTypes[];

  constructor(certificateTypes: CertificateTypes[]) {
    this.certificateTypes = certificateTypes;
  }

  public has(certificateType: CertificateTypes): boolean {
    return this.certificateTypes.some((type) => {
      return type === certificateType;
    });
  }

  public isEmpty(): boolean {
    return this.certificateTypes.length === 0;
  }
}
