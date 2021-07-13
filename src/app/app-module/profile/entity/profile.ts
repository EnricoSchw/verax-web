export enum ProfileType {
  CURRENT,
  CONTACT
}

export class Profile {
  public id?: number | undefined;

  constructor(public userName: string, public publicName: string, public type: ProfileType) {
  }

  static createCurrentProfile(userName: string, publicName: string): Profile {
    return new Profile(userName, publicName, ProfileType.CURRENT);
  }
}
