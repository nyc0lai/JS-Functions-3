const user = 'Ion' 

const getSleepHours = day => {
    switch (day) {
        case 'monday':
            hours = 8;
            break;
        case 'tuesday':
            hours = 8;
            break;
        case 'wednesday':
            hours = 9;
            break;
        case 'thursday':
            hours = 7;
            break;
        case 'friday':
            hours = 3;
            break;
        case 'saturday':
            hours = 10;
            break;
        case 'sunday':
            hours = 10
            break;
    }
    return hours;
}

const getActualSleepHours = () => {return getSleepHours('monday') +
                                        getSleepHours('tuesday')+
                                        getSleepHours('wednesday')+
                                        getSleepHours('thursday')+
                                        getSleepHours('friday')+
                                        getSleepHours('saturday')+
                                        getSleepHours('sunday');
                                    }

const getIdealSleepHours = idealHours => {
    return idealHours * 7;
}

const calculateSleepDebt = () => {

    actualSleepHours = getActualSleepHours();

    idealSleepHours = getIdealSleepHours(7);

    if (actualSleepHours == idealSleepHours) {

        console.log(`${user} got the perfect amount of sleep`);

    } else if (actualSleepHours > idealSleepHours) {

        console.log(`${user} got more sleep than needed.`);

    } else if (actualSleepHours < idealSleepHours) {

        console.log(`${user} should get some rest`);
    }
        console.log(`actual = ${actualSleepHours} hours.`);

        console.log(`ideal = ${idealSleepHours} hours.`);
}

calculateSleepDebt();