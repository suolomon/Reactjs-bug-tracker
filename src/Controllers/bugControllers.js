import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];
    data.push(new bugModel({
        id: 12345,
        name: "Crash on load",
        details:"It takes forever to load",
        steps: "Open application and it will crash",
        version: "v2.0",
        assigned: "Solomon Talemwa",
        creator: "Adam Black",
        priority: 1,
        time:"11:30"
    }))
    data.push(new bugModel({
        id: 54321,
        name: "Broken images",
        details:"Images show broken link icon",
        steps: "When you click on gallery",
        version: "v2.0",
        assigned: "John Opio",
        creator: "Sarah Tina",
        priority: 3,
        time:"01:30"
    }))

    let sorted = data.sort((a,b)=> {return a.priority - b.priority})
    return sorted;
}
