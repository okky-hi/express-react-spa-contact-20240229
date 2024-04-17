import { useParams } from 'react-router-dom';

export function MonthPage() {
  const params = useParams();
  // 後に厳密等価演算子を使用するため、文字列で指定
  const months = [
    { id: '1', name: 'January' },
    { id: '2', name: 'February' },
    { id: '3', name: 'March' },
    { id: '4', name: 'April' },
    { id: '5', name: 'May' },
    { id: '6', name: 'June' },
    { id: '7', name: 'July' },
    { id: '8', name: 'August' },
    { id: '9', name: 'September' },
    { id: '10', name: 'October' },
    { id: '11', name: 'November' },
    { id: '12', name: 'December' },
  ];

  // monthsの中からmonth.idがparams.idと一致するものをmonthに代入
  const month = months.find(month => month.id === params.id);
  // monthに値があればmonth.nameを、偽であればMonths not foundを代入
  const monthName = month ? month.name : 'Months not found';

  return (
    <>
      <h2>Month</h2>
      <div>{monthName}</div>
    </>
  );
}
