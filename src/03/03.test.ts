import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType


beforeEach(() => {
    student = {
        id: 1,
        name: "Prohor",
        age: 26,
        isActive: false,
        address: {
            streetTitle: 'Marshaka 14',
            city: {
                title: 'Chebocsary',
                countryTitle: 'Russia',
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            },

        ]
    }
})

test("new tech skill should be added to student", ()=> {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined();

})

test("student should be made active", ()=> {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)

    expect(student.isActive).toBe(true)


})

test("student live in city?", ()=> {



    let res1 = doesStudentLiveIn(student, 'Moscow')
    let res2 = doesStudentLiveIn(student, 'Russia')

    expect(res1).toBe(false)
    expect(res2).toBe(true)


})