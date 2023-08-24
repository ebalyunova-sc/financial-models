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
        UserOnCycleWith_Five_WinningNumbers: five, 
        UserOnCycleWith_Four_WinningNumbers: four,
        UserOnCycleWith_Three_WinningNumbers: three,
        UserOnCycleWith_Two_WinningNumbers: two,
        UserOnCycleWith_One_WinningNumber: one,
    }
}

function cycleOfRounds() {
    let usersNumberOnRound = [];
    usersNumberOnRound[0] = MIN_NUMBER_OF_USERS;
    let totalUsersNumber = [];
    totalUsersNumber[0] = 0;

    let fiveWinningNumbers = [],
        fourWinningNumbers = [],
        threeWinningNumbers = [],
        twoWinningNumbers = [],
        oneWinningNumber = [];
    let total_Five_WinningNumbers = [],
        total_Four_WinningNumbers = [],
        total_Three_WinningNumbers = [],
        total_Two_WinningNumbers = [],
        total_One_WinningNumber = [];

    let UserOnCycleWith_Five_WinningNumbers, 
        UserOnCycleWith_Four_WinningNumbers,
        UserOnCycleWith_Three_WinningNumbers,
        UserOnCycleWith_Two_WinningNumbers,
        UserOnCycleWith_One_WinningNumber;
    let RoundOnCycleWith_Five_WinningNumbers,
        RoundOnCycleWith_Four_WinningNumbers,
        RoundOnCycleWith_Three_WinningNumbers,
        RoundOnCycleWith_Two_WinningNumbers,
        RoundOnCycleWith_One_WinningNumber;
    
    for (let i = 0; i < NUMBER_OF_RAUNDS; i++) {
        let round = oneRound(usersNumberOnRound[i], 
                             totalUsersNumber[i],
                             UserOnCycleWith_Five_WinningNumbers,
                             UserOnCycleWith_Four_WinningNumbers,
                             UserOnCycleWith_Three_WinningNumbers,
                             UserOnCycleWith_Two_WinningNumbers,
                             UserOnCycleWith_One_WinningNumber);

        fiveWinningNumbers.push(round.fiveWinningNumbers);
        fourWinningNumbers.push(round.fourWinningNumbers);
        threeWinningNumbers.push(round.threeWinningNumbers);
        twoWinningNumbers.push(round.twoWinningNumbers);
        oneWinningNumber.push(round.oneWinningNumber);

        total_Five_WinningNumbers.push(round.fiveWinningNumbers + ((i !== 0) ? total_Five_WinningNumbers[i - 1] : 0));
        total_Four_WinningNumbers.push(round.fourWinningNumbers + ((i !== 0) ? total_Four_WinningNumbers[i - 1] : 0));
        total_Three_WinningNumbers.push(round.threeWinningNumbers + ((i !== 0) ? total_Three_WinningNumbers[i - 1] : 0));
        total_Two_WinningNumbers.push(round.twoWinningNumbers + ((i !== 0) ? total_Two_WinningNumbers[i - 1] : 0));
        total_One_WinningNumber.push(round.oneWinningNumber + ((i !== 0) ? total_One_WinningNumber[i - 1] : 0));

        totalUsersNumber[i] = round.totalUsersNumber;
        totalUsersNumber[i + 1] = totalUsersNumber[i];

        UserOnCycleWith_Five_WinningNumbers = round.UserOnCycleWith_Five_WinningNumbers;
        if (!RoundOnCycleWith_Five_WinningNumbers && UserOnCycleWith_Five_WinningNumbers)
        {
            RoundOnCycleWith_Five_WinningNumbers = i;
        }

        UserOnCycleWith_Four_WinningNumbers = round.UserOnCycleWith_Four_WinningNumbers;
        if (!RoundOnCycleWith_Four_WinningNumbers && UserOnCycleWith_Four_WinningNumbers)
        {
            RoundOnCycleWith_Four_WinningNumbers = i;
        }

        UserOnCycleWith_Three_WinningNumbers = round.UserOnCycleWith_Three_WinningNumbers;
        if (!RoundOnCycleWith_Three_WinningNumbers && UserOnCycleWith_Three_WinningNumbers)
        {
            RoundOnCycleWith_Three_WinningNumbers = i;
        }
        
        UserOnCycleWith_Two_WinningNumbers = round.UserOnCycleWith_Two_WinningNumbers;
        if (!RoundOnCycleWith_Two_WinningNumbers && UserOnCycleWith_Two_WinningNumbers)
        {
            RoundOnCycleWith_Two_WinningNumbers = i;
        }

        UserOnCycleWith_One_WinningNumber = round.UserOnCycleWith_One_WinningNumber;
        if (!RoundOnCycleWith_One_WinningNumber && UserOnCycleWith_One_WinningNumber)
        {
            RoundOnCycleWith_One_WinningNumber = i;
        }

        if (usersNumberOnRound[i] < MAX_NUMBER_OF_USERS)
        {
            usersNumberOnRound[i + 1] = usersNumberOnRound[i] + GROWT_IN_NUMBER_OF_USERS;
        }
        else 
        {
            usersNumberOnRound[i + 1] = usersNumberOnRound[i];
        }
    }

    
    for (let i = 0; i < NUMBER_OF_RAUNDS; i++) {
        console.log('          ',
                    i < 9
                        ? '  '
                        : ' ',
                    (i + 1) + ' -',
                    oneWinningNumber[i] < 10
                        ? '  ' + oneWinningNumber[i] 
                        : ' ' + oneWinningNumber[i],
                    twoWinningNumbers[i] < 10
                        ? '  ' + twoWinningNumbers[i]
                        : ' ' + twoWinningNumbers[i],
                    threeWinningNumbers[i] < 10
                        ? '  ' + threeWinningNumbers[i]
                        : ' ' + threeWinningNumbers[i],
                    fourWinningNumbers[i] < 10
                        ? '  ' + fourWinningNumbers[i]
                        : ' ' + fourWinningNumbers[i],
                    fiveWinningNumbers[i] < 10
                        ? '  ' + fiveWinningNumbers[i]
                        : ' ' + fiveWinningNumbers[i],
                    '          ',
                    (usersNumberOnRound[i] < 100
                        ? usersNumberOnRound[i] < 10
                            ? '   '
                            : '  '
                        : ' ') + usersNumberOnRound[i],
                    ' ' + totalUsersNumber[i] + (totalUsersNumber[i] < 1000
                        ? totalUsersNumber[i] < 100
                            ? totalUsersNumber[i] < 10
                                ? '   '
                                : '  '
                            : ' '
                        : '') + '        ',
                    (total_One_WinningNumber[i] < 100 
                        ? total_One_WinningNumber[i] < 10
                            ? '   ' 
                            : '  '
                        : ' ') + total_One_WinningNumber[i],
                    (total_Two_WinningNumbers[i] < 100 
                        ? total_Two_WinningNumbers[i] < 10
                            ? '   '
                            : '  '
                        : ' ') + total_Two_WinningNumbers[i],
                    (total_Three_WinningNumbers[i] < 100 
                        ? total_Three_WinningNumbers[i] < 10
                            ? '   '
                            : '  '
                        : ' ') + total_Three_WinningNumbers[i],
                    (total_Four_WinningNumbers[i] < 100
                        ? total_Four_WinningNumbers[i] < 10
                            ? '   '
                            : '  '
                        : ' ') + total_Four_WinningNumbers[i],
                    (total_Five_WinningNumbers[i] < 100
                        ? total_Five_WinningNumbers[i] < 10
                            ? '   '
                            : '  '
                        : ' ') + total_Five_WinningNumbers[i]);
    }


    console.log('total users number -', totalUsersNumber[NUMBER_OF_RAUNDS - 1]);

    console.log('d1 - ',
                UserOnCycleWith_One_WinningNumber 
                    ? UserOnCycleWith_One_WinningNumber
                      + ' user on round '
                      + RoundOnCycleWith_One_WinningNumber 
                    : 'no user');
    console.log('d2 - ',
                UserOnCycleWith_Two_WinningNumbers 
                    ? UserOnCycleWith_Two_WinningNumbers
                      + ' user on round '
                      + RoundOnCycleWith_Two_WinningNumbers 
                    : 'no user');
    console.log('d3 - ',
                UserOnCycleWith_Three_WinningNumbers 
                    ? UserOnCycleWith_Three_WinningNumbers
                      + ' user on round '
                      + RoundOnCycleWith_Three_WinningNumbers 
                    : 'no user');
    console.log('d4 - ',
                UserOnCycleWith_Four_WinningNumbers 
                    ? UserOnCycleWith_Four_WinningNumbers
                      + ' user on round '
                      + RoundOnCycleWith_Four_WinningNumbers 
                    : 'no user');
    console.log('d5 - ',
                UserOnCycleWith_Five_WinningNumbers 
                    ? UserOnCycleWith_Five_WinningNumbers 
                      + ' user on round '
                      + RoundOnCycleWith_Five_WinningNumbers
                    : 'no user');
}

console.log('number of round -  d1  d2  d3  d4  d5    users number  total users    t1   t2   t3   t4   t5\n'
          + '                                             on round  number');
cycleOfRounds();