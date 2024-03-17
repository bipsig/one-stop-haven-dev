import { fetchDataFromApi } from "./api";

export const getMarkedPrice = (price) => {
    return price * 82;
}

export const getSellingPrice = (marked, discount) => {
    return marked - (marked * discount / 100);
}

export const generateSubmenuData = (categories) => {
    const subMenuData = [];
    // console.log (categories);
    // console.log (categories?.[0]);

    for (let i = 0; i < categories?.length; i++) {
        console.log (categories?.[i]);

        let categoryPath = categories?.[i];
        let categoryName = capitalizeEveryWord (categoryPath);

        let obj = {
            id: i+1,
            name: categoryName,
            path: categoryPath,
            doc_count: 100,
        };

        subMenuData.push (obj);
    }

    return subMenuData;
}

function capitalizeEveryWord(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            ans += str [i].toUpperCase();
        }

        else if (str [i] === ' ') {
            ans += " "
            i++;
            ans += str [i].toUpperCase();
        }
        else {
            ans += str [i];
        }
    }

    return ans;
}