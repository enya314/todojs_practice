import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // テキストの生成
  const p = document.createElement("p");
  p.innerText = text;
  div.appendChild(p);

  // 完了ボタンの生成
  const complete_btn = document.createElement("button");
  complete_btn.innerText = "完了";
  complete_btn.addEventListener("click", () => {
    const rm_target = delete_btn.closest("li");
    const text = complete_btn.parentElement.firstChild.innerText;
    console.log(text);
    div.removeChild(complete_btn);
    div.removeChild(delete_btn);
    document.getElementById("incomplete-list").removeChild(rm_target);

    const return_btn = document.createElement("button");
    return_btn.innerText = "戻す";
    return_btn.addEventListener("click", () => {
      // 押された戻るボタンの親タグを完了リストから削除
      const deleteTarget = return_btn.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = return_btn.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    div.appendChild(return_btn);

    // 完了リストへの追加
    const addtarget = document.createElement("li");
    addtarget.appendChild(div);
    document.getElementById("complete-list").appendChild(addtarget);
    console.log(addtarget);
  });
  div.appendChild(complete_btn);

  // 削除ボタンの生成
  const delete_btn = document.createElement("button");
  delete_btn.innerText = "削除";
  delete_btn.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を見完了リストから削除
    const deleteTarget = delete_btn.closest("li");
    console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  div.appendChild(delete_btn);

  // liタグ生成
  const li = document.createElement("li");

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
