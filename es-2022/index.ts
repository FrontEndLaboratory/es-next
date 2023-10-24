class C {
  #brand = 0;

  static isC(obj: C) {
    return #brand in obj;
  }
}

