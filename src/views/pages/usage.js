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

  span.device-tips {
    display: inline-block;
    vertical-align: top;
    width: 310px;
    height: 120px;

    margin: 1em 0.5em 0 !important;

    /* border: 1px solid rgb(90, 115, 161); */
    border: 1px solid rgb(140, 140, 140);
    border-radius: 5px;

    background-color: rgb(250, 250, 250);

    box-shadow: 2px 2px 4px rgba(30, 30, 30, 0.4);

    div.tips-grid-container {
      display: grid;
      grid-template-columns: 60px 1fr;
      grid-template-rows: 60px 1fr;

      width: 100%;
      height: 100%;
      margin: 0 !important;

      div.img-container {
        margin-top: 0 !important;
        grid-row: 1;
        grid-column: 1;
        position: relative;

        width: 100%;
        height: 100%;

        img {
          display: inline-block;
          /* width: 40px; */
          height: 40px;
          margin-top: 0 !important;

          background-color: rgb(240, 240, 240);
          border: 6px solid rgb(240, 240, 240);
          border-radius: 10px;

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      span {
        display: inline-block;
        margin-top: 0 !important;

        &.device-name {
          grid-row: 1;
          grid-column: 2;
          line-height: 60px;

          font-family: "M PLUS 1p", "Helvetica Neue", Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;

          text-align: center;
        }
        &.device-desc {
          display: inline-block;

          grid-row: 2;
          grid-column: 1 / 3;

          border-top: 1px solid rgb(200, 200, 200);
          margin: 0 5px;
          padding: 0.8em 0.5em 0 !important;

          font-size: 14px;
        }
      }
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
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/dc.png`}
                      alt="DCの画像"
                    ></img>
                  </div>
                  <span className="device-name">直流電源</span>
                  <span className="device-desc">
                    直流電源です. 回路の最初に利用してください.
                  </span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/toggle.png`}
                      alt="トグルスイッチの画像"
                    ></img>
                  </div>
                  <span className="device-name">トグルスイッチ</span>
                  <span className="device-desc">
                    クリックするごとにＯＮ/ＯＦＦが切り替わります.
                  </span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/pushon.png`}
                      alt="DCの画像"
                    ></img>
                  </div>
                  <span className="device-name">
                    プッシュオン(クロック)スイッチ
                  </span>
                  <span className="device-desc">
                    このスイッチを押している間だけＯＮになります.
                  </span>
                </div>
              </span>

              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/or.png`}
                      alt="ORの画像"
                    ></img>
                  </div>
                  <span className="device-name">ＯＲ</span>
                  <span className="device-desc">論理和を実現する回路です.</span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/3or.png`}
                      alt="3入力のORの画像"
                    ></img>
                  </div>
                  <span className="device-name">３ＯＲ</span>
                  <span className="device-desc">
                    ３つの入力を持つＯＲで,
                    いずれか一つがＯＮのときに出力がＯＮになります.
                  </span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/and.png`}
                      alt="ANDの画像"
                    ></img>
                  </div>
                  <span className="device-name">ＡＮＤ</span>
                  <span className="device-desc">論理積を実現する回路です.</span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/3and.png`}
                      alt="3入力のANDの画像"
                    ></img>
                  </div>
                  <span className="device-name">３入力ＡＮＤ回路</span>
                  <span className="device-desc">
                    ３つの入力を持つＡＮＤで,
                    すべてがＯＮのときに出力がＯＮになります.
                  </span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/not.png`}
                      alt="NOTの画像"
                    ></img>
                  </div>
                  <span className="device-name">ＮＯＴ回路</span>
                  <span className="device-desc">
                    否定を実現する回路で, 入力を反転して出力します.
                  </span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/xor.png`}
                      alt="XOR回路の画像"
                    ></img>
                  </div>
                  <span className="device-name">ＸＯＲ回路</span>
                  <span className="device-desc">
                    排他的論理和を実現する回路です.
                  </span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/jkff.png`}
                      alt="JKFFの画像"
                    ></img>
                  </div>
                  <span className="device-name">ＪＫフリップフロップ回路</span>
                  <span className="device-desc">
                    入力が３つあり, 上下がそれぞれＪ, Ｋに対応しており,
                    中央がクロック入力端子となっています.
                  </span>
                </div>
              </span>

              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/led.png`}
                      alt="LEDの画像"
                    ></img>
                  </div>
                  <span className="device-name">ＬＥＤライト</span>
                  <span className="device-desc">
                    入力するとＬＥＤライトが赤く光ります.
                  </span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/7seg.png`}
                      alt="7セグメントディスプレイの画像"
                    ></img>
                  </div>
                  <span className="device-name">７セグメントディスプレイ</span>
                  <span className="device-desc">
                    入力に応じたセグメントが光ります.
                    入力と各セグメントの対応はこちら.
                  </span>
                </div>
              </span>
              <span className="device-tips">
                <div className="tips-grid-container">
                  <div className="img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}/usage/device/4bit7seg.png`}
                      alt="４ビット７セグメントディスプレイの画像"
                    ></img>
                  </div>
                  <span className="device-name">
                    ４ビット７セグメントディスプレイ
                  </span>
                  <span className="device-desc">
                    入力された４ビットの２進数を, １６進数として表示します.
                  </span>
                </div>
              </span>
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
