export const formatPhone = (str: string) => {
    return [[str.substring(0, 3), str.substring(3, 6), str.substring(6, 9)].join(" "), str.substring(9, 12), str.substring(12)].join(" ")
}