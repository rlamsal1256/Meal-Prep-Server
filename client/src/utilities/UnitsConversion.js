class UnitsConversion {
  convertLbsToKg(weightInLbs) {
    return weightInLbs * 0.4536;
  }

  convertFtPlusInchToCm(ft, inch) {
    return ft * 30.48 + inch * 2.54;
  }
}

export default UnitsConversion;
