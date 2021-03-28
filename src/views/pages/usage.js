import React from "react";

import styled from "styled-components";

import Workspace from "../components/workspace";
import "./doc.scss";

const UsageDiv = styled.div`
  z-index: 1;
  margin-left: 2vw;
  margin-right: 2vw;

  span.o-circle {
    &:after {
      display: inline-block;

      background-color: rgb(251, 204, 45);

      font-size: 0.8em;
      text-align: center;
      line-height: 0.8em;
      width: 0.8em;
      height: 0.8em;

      margin-right: 0.1em;
      margin-left: 0.1em;

      border-radius: 50%;
      border: 1px solid rgb(20, 20, 20);

      content: "";
    }
  }
  span.w-circle {
    &:after {
      display: inline-block;

      background-color: rgb(240, 240, 240);

      font-size: 0.8em;
      text-align: center;
      line-height: 0.8em;
      width: 0.8em;
      height: 0.8em;

      margin-right: 0.1em;
      margin-left: 0.1em;

      border-radius: 50%;
      border: 1px solid rgb(20, 20, 20);

      content: "";
    }
  }
`;

function Usage() {
  return (
    <UsageDiv>
      <section className="doc">
        <div className="page-title">
          <span>使い方</span>
          <span>基本的な操作について</span>
        </div>
        <div className="page-desc">
          {/* デバイスの利用 */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/usage/cpu.svg`}
                alt="デバイスの画像"
              ></img>
              デバイスの利用
            </div>
            <div className="desc-cont">
              <ol>
                <li>
                  左側の<span className="hl1">ツールボックス</span>
                  から利用したいデバイスを選ぶ
                </li>
                <li>
                  そのデバイスを右側の
                  <span className="hl2">ワークスペース</span>までドラッグし,
                  ドロップする
                </li>
                <li>
                  デバイスは任意に動かすことができ,
                  矩形選択することで複数選択し一気に動かすこともできる
                </li>
              </ol>
            </div>
          </div>

          {/* デバイスの削除 */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/usage/eraser.svg`}
                alt="消しゴムの画像"
              ></img>
              デバイスの削除
            </div>
            <div className="desc-cont">
              <ul>
                <li>
                  <span className="hl2">ワークスペース</span>
                  上の削除したいデバイスを,
                  <span className="hl1">ツールボックス</span>
                  までドラッグ＆ドロップ
                </li>
              </ul>
            </div>
          </div>

          {/* デバイスの接続と切断 */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/usage/connect.svg`}
                alt="コネクタの画像"
              ></img>
              デバイス同士の接続と解除
            </div>
            <div className="desc-cont">
              <ul>
                <li>
                  デバイスの入力部(橙円<span className="o-circle"></span>
                  )と出力部(白円<span className="w-circle"></span>
                  )をドラッグ操作することで接続
                </li>
                <li>
                  デバイスの入力部(橙円<span className="o-circle"></span>
                  )をクリックすることで, 接続を解除
                </li>
              </ul>
            </div>
          </div>

          {/* デバイスラベルの変更 */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/usage/inspiration.svg`}
                alt="鉛筆の画像"
              ></img>
              デバイスラベルの変更
            </div>
            <div className="desc-cont">
              <ol>
                <li>
                  <span className="hl2">ワークスペース</span>
                  上のデバイスのラベルをダブルクリック
                </li>
                <li>
                  ポップアップしたテキストボックスにて,
                  ラベルを変更しEnterキーを押す
                </li>
              </ol>
            </div>
          </div>

          {/* 各デバイスの説明 */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/usage/presentation.svg`}
                alt="説明の画像"
              ></img>
              各デバイスの説明
            </div>
            <div className="desc-cont">
              <ul>
                <li>DC:</li>
                <li>Toggle: </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Workspace
        loadCircuitIdx={0}
        saveFileName="t00b000x_usage.cjb"
      ></Workspace>
    </UsageDiv>
  );
}

export default Usage;
