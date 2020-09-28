const BucketOperations = require('./BucketOperations');

class AdvertisingAnalysis {

    async showContent(data) {
        return await ageAnalysis(data);
    }
}

module.exports = new AdvertisingAnalysis();

async function ageAnalysis({ body }) {

    const { age, gender } = body;

    if (gender === "male") {
        const prefix = filterByAge(age);

        const content = await BucketOperations.returnObjects(prefix, gender);

        return content;
    }
    else {
        const prefix = filterByAge(age);

        const content = await BucketOperations.returnObjects(prefix, gender);

        return content;
    }
}

function filterByAge(age) {
    if (age > 16 && age < 23) {
        return '17_22_years';
    }
    else if (age > 22 && age < 27) {
        return '23_26_years';
    }
    else if (age > 26 && age < 33) {
        return '27_32_years';
    }
    else if (age > 33 && age < 52) {
        return '40_50_years';
    }
}