import React from "react";
import moment from "moment";

export const useDates = ({from: fromProp, to:toProp=new Date()}) => {


    const fromMoment = moment(toProp).startOf("week").add(1,'day').utc().format("YYYY-MM-DD")
    const [from, setFrom] = React.useState(fromMoment);
    const toMoment = moment(toProp).add(1, 'week').startOf("week").utc().format("YYYY-MM-DD")
    const [to, setTo] = React.useState(toMoment);

    return {
        from,
        to,
        setFrom,
        setTo,
        fromView: moment(from).format("YYYY-MM-DD"),
        toView: moment(to).format("YYYY-MM-DD"),
        getPreviousDates: (fromDate) => { //date = previous from date
            const newTo = moment(fromDate).startOf('week').utc().format("YYYY-MM-DD");
            const newFrom = moment(newTo).subtract(1,'week').add(1,'day').utc().format("YYYY-MM-DD");
            setFrom(newFrom);
            setTo(newTo);
        },
        getNextDates: (toDate) => { //date = previous to date
            const newTo = moment(toDate).add(1,'week').startOf('week').utc().format("YYYY-MM-DD");
            const newFrom = moment(newTo).subtract(1,'week').add(1, 'day').utc().format("YYYY-MM-DD");
            setFrom(newFrom);
            setTo(newTo);
        }
    }
}