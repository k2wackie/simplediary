import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김견우",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길도",
    content: "하이 2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김고객",
    content: "하이 1",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "이독자",
    content: "하이 4",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "박작가",
    content: "하이 5",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
