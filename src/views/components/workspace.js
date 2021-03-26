import React, { useEffect } from "react";

import styled from "styled-components";

const WorkspaceDiv = styled.div`
  margin: 0 3vw;

  div.cjb-load-container {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 300px 1fr 300px 1fr;

    div.pad {
      display: inline-block;
    }
    div.button-div {
      display: inline-block;
      margin: 0 0px;
    }
    input[type="file"] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    a,
    label {
      font-size: 1.1rem;
      display: inline-block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: #555;
      font-weight: 700;
      background-color: #f9f9f9;
      border-radius: 5px;
      border: 2px solid #666;

      /* font-size: 2rem; */
      position: relative;
      padding: 0;

      user-select: none;
      -webkit-user-select: none;

      cursor: pointer;

      &:before {
        z-index: -1;
        position: absolute;
        bottom: -8px;
        left: -2px;

        display: block;

        width: 100%;
        height: 8px;

        content: "";
        -webkit-transition: all 0.3s;
        transition: all 0.3s;

        border: 2px solid #666;
        border-top: 1px solid #666;
        border-radius: 0 0 0.5rem 0.5rem;
        background-image: -webkit-repeating-linear-gradient(
          135deg,
          #404040,
          #000 1px,
          transparent 2px,
          transparent 5px
        );
        background-image: repeating-linear-gradient(
          -45deg,
          #404040,
          #404040 1px,
          transparent 2px,
          transparent 5px
        );
        background-size: 7px 7px;

        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      &:hover {
        color: #444;
        background-color: #eee;
        &:before {
          bottom: -5px;
        }
      }

      & span.dummy-icon {
        display: inline-block;
        width: 45px;
        height: 30px;
      }

      & span.button-text {
        display: inline-block;
        width: 255px;
        text-align: center;
      }

      /* アイコン */
      & img {
        display: inline-block;
        width: 30px;
        height: 30px;

        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        margin: 0 0 0 15px;
      }
    }
  }

  div.simcir-container {
    overflow: scroll;
  }
`;

function Workspace(props) {
  const setButtonId = `set-circuit-${props.setButtonIdx}`;

  // class componentでの'componentDidMout' とか 'componentDidUpdate'とかと類似
  useEffect(() => {
    document.getElementById(setButtonId).click();
  });

  const updateCircuit = function (text) {
    document.getElementById("update-circuit").value = text;
    document.getElementById("update-circuit").click();
  };

  const fileChangeFunc = function (e) {
    var reader_ = new FileReader();

    reader_.onload = function () {
      let date_array = new Uint8Array(reader_.result.slice(0, 9));
      let text_array = new Uint8Array(reader_.result.slice(10));

      for (let i = 0; i < text_array.length; i++) {
        text_array[i] -= date_array[8];
      }
      let text = new TextDecoder("utf-8").decode(text_array);

      try {
        updateCircuit(text);
      } catch (e) {
        // e.name
        // e.message

        // swal({
        //   title: "InputFileError!",
        //   text: "選択したファイルに誤りがあります\n違うファイルを選択してください",
        //   icon: "error",
        //   button: {
        //     text: "OK"
        //   }
        // });

        alert(e.name);
      }
    };
    reader_.readAsArrayBuffer(e.target.files[0]);
  };

  return (
    <WorkspaceDiv>
      <div className="cjb-load-container">
        <div className="pad"></div>
        <div className="button-div">
          <a id="dl-button" type="file" href="/#">
            <span className="dummy-icon"></span>
            <img
              src={`${process.env.PUBLIC_URL}/load-button/dl.svg`}
              alt="ダウンロードの画像"
            ></img>
            <span className="button-text">回路構成をダウンロード</span>
          </a>
        </div>
        <div className="pad"></div>
        <div className="button-div">
          <input
            type="file"
            id="ul-button"
            onChange={(e) => fileChangeFunc(e)}
          ></input>
          <span className="dummy-icon"></span>
          <label htmlFor="ul-button">
            <span className="dummy-icon"></span>
            <img
              src={`${process.env.PUBLIC_URL}/load-button/ul.svg`}
              alt="アップロードの画像"
            ></img>
            <span className="button-text">回路構成をセットする</span>
          </label>
        </div>
        <div className="pad"></div>
      </div>
      <div className="simcir-container">
        <div className="simcir"></div>
      </div>
    </WorkspaceDiv>
  );
}

export default Workspace;
