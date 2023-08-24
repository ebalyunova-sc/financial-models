const MIN_NUMBER_OF_USERS = 5;
const MAX_NUMBER_OF_USERS = 100;
const GROWT_IN_NUMBER_OF_USERS = 5;
const NUMBER_OF_RAUNDS = 50;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateFiveNumbers() {
    let number = getRandomInt(10);
    for (let i = 0; i < 4; i++) {
        number = number * 10 + getRandomInt (10);
    }
    return number;
}

function oneRound(usersNumberOnRound, totalUsersNumber, five, four, three, two, one) {
    const winNumber = generateFiveNumbers();
    let userNumbers = [];
    for (let i = 0; i < usersNumberOnRound; i++) {
        userNumbers[i] = generateFiveNumbers();
    }

    let fiveWinningNumbers = 0,
        fourWinningNumbers = 0,
        threeWinningNumbers = 0,
        twoWinningNumbers = 0,
        oneWinningNumber = 0;

    for (let i = 0; i < usersNumberOnRound; i++) {
        totalUsersNumber++;
        if (userNumbers[i] === winNumber) {
            fiveWinningNumbers++;
            if (!five)
            {
                five = totalUsersNumber;
            }
            continue;
        }
        else if ((userNumbers[i] - userNumbers[i] % 10) === (winNumber - winNumber % 10)) {
            fourWinningNumbers++;
            if (!four)
            {
                four = totalUsersNumber;
            }
            continue;
        }
        else if ((userNumbers[i] - userNumbers[i] % 100) === (winNumber - winNumber % 100)) {
            threeWinningNumbers++;
            if (!three)
            {
                three = totalUsersNumber;
            }
            continue;
        }
        else if ((userNumbers[i] - userNumbers[i] % 1000) === (winNumber - winNumber % 1000)) {
            twoWinningNumbers++;
            if (!two)
            {
                two = totalUsersNumber;
            }
            continue;
        }
        else if ((userNumbers[i] - userNumbers[i] % 10000) === (winNumber - winNumber % 10000)) {
            oneWinningNumber++;
            if (!one)
            {
                one = totalUsersNumber;
            }
            continue;
        }
    }
    return {
        fiveWinningNumbers: fiveWinningNumbers,
        fourWinningNumbers: fourWinningNumbers,
        threeWinningNumbers: threeWinningNumbers,
        twoWinningNumbers: twoWinningNumbers,
        oneWinningNumber: oneWinningNumber,
        totalUsersNumber: totalUsersNumber,
        firstUserOnCycleWith_Five_WinningNumbers: five, 
        firstUserOnCycleWith_Four_WinningNumbers: four,
        firstUserOnCycleWith_Three_WinningNumbers: three,
        firstUserOnCycleWith_Two_WinningNumbers: two,
        firstUserOnCycleWith_One_WinningNumber: one,
    }
}

function cycleOfRounds() {
    let usersNumberOnRound = MIN_NUMBER_OF_USERS;
    let fiveWinningNumbers = [],
        fourWinningNumbers = [],
        threeWinningNumbers = [],
        twoWinningNumbers = [],
        oneWinningNumber = [];

    let totalUsersNumber = 0, 
        firstUserOnCycleWith_Five_WinningNumbers, 
        firstUserOnCycleWith_Four_WinningNumbers,
        firstUserOnCycleWith_Three_WinningNumbers,
        firstUserOnCycleWith_Two_WinningNumbers,
        firstUserOnCycleWith_One_WinningNumber;
    
    for (let i = 0; i < NUMBER_OF_RAUNDS; i++) {
        let round = oneRound(usersNumberOnRound, 
                             totalUsersNumber,
                             firstUserOnCycleWith_Five_WinningNumbers,
                             firstUserOnCycleWith_Four_WinningNumbers,
                             firstUserOnCycleWith_Three_WinningNumbers,
                             firstUserOnCycleWith_Two_WinningNumbers,
                             firstUserOnCycleWith_One_WinningNumber);

        fiveWinningNumbers.push(round.fiveWinningNumbers);
        fourWinningNumbers.push(round.fourWinningNumbers);
        threeWinningNumbers.push(round.threeWinningNumbers);
        twoWinningNumbers.push(round.twoWinningNumbers);
        oneWinningNumber.push(round.oneWinningNumber);

        totalUsersNumber = round.totalUsersNumber;

        firstUserOnCycleWith_Five_WinningNumbers = round.firstUserOnCycleWith_Five_WinningNumbers; 
        firstUserOnCycleWith_Four_WinningNumbers = round.firstUserOnCycleWith_Four_WinningNumbers;
        firstUserOnCycleWith_Three_WinningNumbers = round.firstUserOnCycleWith_Three_WinningNumbers;
        firstUserOnCycleWith_Two_WinningNumbers = round.firstUserOnCycleWith_Two_WinningNumbers;
        firstUserOnCycleWith_One_WinningNumber = round.firstUserOnCycleWith_One_WinningNumber;

        if (usersNumberOnRound <= MAX_NUMBER_OF_USERS)
        {
            usersNumberOnRound += GROWT_IN_NUMBER_OF_USERS;
        }
    }

    console.log('total users number -', totalUsersNumber);
    console.log('5',
                firstUserOnCycleWith_Five_WinningNumbers 
                    ? firstUserOnCycleWith_Five_WinningNumbers
                    : 'no user',
                '\n',
                fiveWinningNumbers);
    console.log('4',
                firstUserOnCycleWith_Four_WinningNumbers 
                    ? firstUserOnCycleWith_Four_WinningNumbers 
                    : 'no user',
                '\n', 
                fourWinningNumbers);
    console.log('3',
                firstUserOnCycleWith_Three_WinningNumbers 
                    ? firstUserOnCycleWith_Three_WinningNumbers 
                    : 'no user', 
                '\n', 
                threeWinningNumbers);
    console.log('2',
                firstUserOnCycleWith_Two_WinningNumbers 
                    ? firstUserOnCycleWith_Two_WinningNumbers 
                    : 'no user', 
                '\n', 
                twoWinningNumbers);
    console.log('1',
                firstUserOnCycleWith_One_WinningNumber 
                    ? firstUserOnCycleWith_One_WinningNumber 
                    : 'no user', 
                '\n', 
                oneWinningNumber);
}

cycleOfRounds();