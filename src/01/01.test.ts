import {mult, splitIntoWords, sum} from "./01";

test('sum should be connect', ()=> {
    const a = 1
    const b = 2
    const c = 3

    const result1 = sum(a,c)
    const result2 = sum(a,b)

    expect(result1).toBe(4)
    expect(result2).toBe(3)
})

test('multiply should be connect', ()=> {
    const a = 1
    const b = 2
    const c = 3

    const result1 = mult(a,c)
    const result2 = mult(b,c)

    expect(result1).toBe(3)
    expect(result2).toBe(6)
})

test('splitIntoWords should be connect', ()=> {
    const sent1 = 'hello my friend'
    const sent2 = 'JS no the programing language'

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('no')
    expect(result2[2]).toBe('the')
    expect(result2[3]).toBe('programing')
    expect(result2[4]).toBe('language')
})