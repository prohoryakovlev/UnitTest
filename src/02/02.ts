
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: StudentAddressType
    technologies: Array<StudentTechnologiesType>

}
type StudentAddressType = {
    streetTitle: string
    city: StudentCityType
}
type StudentCityType = {
    title: string
    countryTitle: string
}
type StudentTechnologiesType = {
    id:number
    title: string
}


export const student:StudentType = {
    id: 1,
    name: "Prohor",
    age: 26,
    isActive: true,
    address: {
        streetTitle: 'Marshaka 14',
        city: {
            title: 'Chebocsary',
            countryTitle: 'Russia',
        }
    },
    technologies: [
        {
            id:1,
            title: 'HTML'
        },
        {
            id:2,
            title: 'CSS'
        },
        {
            id:3,
            title: 'JS'
        },

    ]
}

console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[1].title)