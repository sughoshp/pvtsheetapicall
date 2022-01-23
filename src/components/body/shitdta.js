import React, { useEffect, useState } from "react";
import "./sheetdta.css"

// import { gapi } from 'gapi-script';
function Sheet(props) {
    let ACCESS_TOKEN = props.token;
    let SHEET_ID = "1oGKRtkFSqADFhkZ96UO7eJoQBueCFgTJr7P0l0XIlQM";
    const API_KEY = "AIzaSyAmBui0Z1BgPGCpIW3q0uPrnHYXmASzA-M"
    let RANGES = "A1:D5"
    const [sheetdata, setSheetData] = useState([]);

    useEffect(() => {
        datasheet();
    }, []);

    function datasheet(props) {
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            },
        };

        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(SHEET_ID)}?includeGridData=true&ranges=${encodeURIComponent(RANGES)}&key=${encodeURIComponent(API_KEY)}`, requestOptions)
            .then(res => res.json()).then((result) => {
                const list = []
                result.sheets.forEach((shdta) => {
                    shdta.data.forEach((shrowval) => {
                        shrowval.rowData.forEach((shval) => {
                            var name = '';
                            var data = '';
                            shval.values.forEach((acval, index) => {
                                if (index === 0) {
                                    name = (acval.formattedValue)
                                }
                                if (index === 1) {
                                    data = (acval.formattedValue)
                                }
                            })
                            list.push({ name, data })
                        })
                    })
                })
                setSheetData(list)
            });
    };

    return (
        <div>
            {sheetdata.map((elemt, index) => {
                return (
                    <div className="output" key={index}>
                        {JSON.stringify(elemt)}
                    </div>
                )
            })
            }
        </div>
    );
}
export default Sheet;
