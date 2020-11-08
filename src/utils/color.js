const generateRandomColor = () => {
    let colorString = "#";
    for (let i = 0; i < 6; i++) {
        let randInt = Math.floor(Math.random() * 16)
            colorString += intToHexArr[randInt];
        }

        return colorString;
    }


const intToHexArr = ["0","1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"]

const randomColor = generateRandomColor();

export default randomColor;