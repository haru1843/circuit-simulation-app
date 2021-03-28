import React from "react";

import styled from "styled-components";

import Workspace from "../components/workspace";
import "./doc.scss";

const ExerciseDiv = styled.div`
  z-index: 1;
  margin-left: 2vw;
  margin-right: 2vw;

  li {
    margin-bottom: 0.7em !important;
  }
`;

function Exercise() {
  return (
    <ExerciseDiv>
      <section className="doc">
        <div className="page-title">
          <span>練習</span>
          <span>実際にやってみよう</span>
        </div>
        <div className="page-desc">
          {/* 内容 */}
          <div className="container">
            <div className="desc-cont">
              <ol>
                <li>
                  <span className="hl2">ＮＯＴ</span>,{" "}
                  <span className="hl2">ＯＲ</span>,{" "}
                  <span className="hl2">ＡＮＤ</span>,{" "}
                  <span className="hl2">ＸＯＲ</span>回路の動作を確認せよ.
                  入力の切り替えは<span className="hl1">トグルスイッチ</span>
                  を用いて, 動作の確認は<span className="hl1">ＬＥＤ</span>
                  を用いること.
                </li>
                <li>
                  <span className="hl2">ＪＫフリップフロップ</span>
                  の動作を確認せよ. 入力となるパルスは
                  <span className="hl1">ＰｕｓｈＯｎスイッチ</span>
                  を用いて, 動作の確認は<span className="hl1">ＬＥＤ</span>
                  を用いること.
                </li>
                <li>
                  <span className="hl1">トグルスイッチ</span>を用いて,{" "}
                  <span className="hl2">７セグメントディスプレイ</span>
                  に０〜３を表示せよ
                </li>
                <li>
                  <span className="hl1">トグルスイッチ</span>を用いて,{" "}
                  <span className="hl2">４ビット７セグメントディスプレイ</span>
                  に０〜Ｆを表示せよ
                </li>
                <li>
                  任意の回路を作成し,{" "}
                  <span className="hl2">
                    構成ファイル(.cjbファイル)をダウンロード
                  </span>
                  せよ. ワークスペース上部にある
                  <span className="hl1">「回路構成をダウンロード」ボタン</span>
                  をクリックすることで, 回路の構成ファイルをダウンロードできる
                </li>
                <li>
                  任意の構成ファイル(.cjbファイル)から,{" "}
                  <span className="hl2">回路を復元</span>せよ.{" "}
                  ワークスペース上部にある
                  <span className="hl1">「回路構成をセットする」ボタン</span>
                  をクリックすることで, セットしたい構成ファイルを選択できる
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Workspace
        loadCircuitIdx={1}
        saveFileName="t00b000x_exercise.cjb"
      ></Workspace>
    </ExerciseDiv>
  );
}

export default Exercise;
