import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

// 月のリストを定義
export function MonthList() {
  const months = [
    {
      id: 1,
      name: 'January'
    },
    {
      id: 2,
      name: 'February'
    },
    {
      id: 3,
      name: 'March'
    },
    {
      id: 4,
      name: 'April'},
    {
      id: 5,
      name: 'May'},
    {
      id: 6,
      name: 'June' },
    {
      id: 7,
      name: 'July'
    },
    {
      id: 8,
      name: 'August'
    },
    {
      id: 9,
      name: 'September'
    },
    {
      id: 10,
      name: 'October'
    },
    {
      id: 11,
      name: 'November'
    },
    {
      id: 12,
      name: 'December'
    },
  ];
  return months;
}

// 月を表示するコンポーネント
export function MonthPage() {
  const params = useParams<{ id: string }>(); // useParamsのジェネリック型を使用して、idパラメータの型をstringに指定
  const months = MonthList(); // 月のリストを取得
  const monthId = parseInt(params.id || '0'); // params.idがundefinedの場合、デフォルト値として'0'を使用
  const month = months.find((month) => month.id === monthId);
  const monthName = month ? month.name : 'Unknown';

  return <h2>{monthName}</h2>;
}

// アプリケーションのメインコンポーネント
export function App() {
  return (
    <Router>
      <div>
        <h1>Monthly Display</h1>
        <Routes>
          {/* 1から12の各月に対するルートを設定 */}
          <Route path="/month/:id" element={<MonthPage />} />
        </Routes>
      </div>
    </Router>
  );
}
