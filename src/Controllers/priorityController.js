const colours = ["#b33a3a", "#ff6700", "#32cd32"]

// eslint-disable-next-line import/no-anonymous-default-export
export default(priority)=> {
    const level = ["High", "Medium", "Low"]
    return {
        level:(level[priority-1]),
        colour:colours[priority-1]
    }
}