import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02-02";

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.countryTitle === cityName
}

export const addMoneyToBudget = (Building: GovernmentBuildingType, budget: number) => {
    return Building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    return houseType.repaired === true
}
export const toFireStaff = (Building: GovernmentBuildingType, staffToFire: number) => {
    return Building.staffCount -= staffToFire
}
export const toHireStaff = (Building: GovernmentBuildingType, staffToHire: number) => {
    return Building.staffCount += staffToHire
}