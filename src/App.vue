<template>
  <div id="app">
    <div class="all-card">
      <div class="card-container">
        <div class="card-item" v-for="(item, index) in 4" :key="index+87">
          <div class="card-temp"></div>
        </div>

        <div class="card-item" v-for="(item, index) in mark" :key="index-87">
          <div class="card-icon"></div>
          <div class="card-done" :class="item"></div>
        </div>
      </div>

      <div class="empty">
        <div class="empty1" draggable="false"></div>

        <div class="empty1" draggable="false"></div>

        <div class="empty1" draggable="false"></div>

        <div class="empty1" draggable="false"></div>

        <div class="empty1" draggable="false"></div>

        <div class="empty1" draggable="false"></div>

        <div class="empty1" draggable="false"></div>

        <div class="empty1" draggable="false"></div>

        <div class="undo" @click="undoHandler($event)">undo</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/_variable.scss";
@import "./assets/_mixin.scss";
@import "./assets/_grid.scss";
.empty1:nth-child(4),
.card-item:nth-child(4) {
  margin-right: auto !important;
  /* @include higherPad(){
    margin-right: 20px !important;
  } */
  /* @include lapTop() {
    margin-right: 10px !important;
  } */
}
.empty1:nth-child(5),
.card-item:nth-child(5) {
  margin-left: auto !important;
  /* @include higherPad(){
    margin-left: 20px !important;
  } */
  /* @include lapTop() {
    margin-left: 10px !important;
  } */
}
.card-container {
  display: flex;
  width: 100%;
  //justify-content: center;
  .card-item {
    width: 8%;
    height: 0;
    padding-bottom: 12.4%;
    background-color: $cache;
    @include higherPad(){
    margin:0 15px;
  }
  @include higherLapTop(){
    margin:0 20px;
  }
    margin: 0 10px;
    position: relative;
    > .card-temp,
    > .card-done {
      position: absolute;
      width: 100%;
      height: 100%;
      *:first-child {
        margin-top: 0%;
      }
      * {
        margin-top: -156%;
      }
    }
  }
}

@each $name, $val in $bgi {
  .card-item:nth-child(#{$name + 4}) > .card-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    @include bg();
    background-image: url("../src/assets/card/"+$val+"/"+$val+".svg");
  }
}
.card-item:nth-child(6) > .card-icon {
  width: 40px;
}
.card-item:nth-child(8) > .card-icon {
  width: 50px;
}

.all-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  @include lapTop {
    padding: 30px 30px;
  }
  @include pad {
    padding: 30px 15px;
  }
  @include phone {
    padding: 30px 10px;
  }
  padding: 30px 60px;
  background-color: $background;
  img {
    position: relative;
    left: 0;
    width: 100%;
    height: auto;
  }
}
.empty {
  display: flex;
  width: 100%;
  position: relative;
  .empty1 {
    margin: 30px 10px;
    @include higherPad(){
    margin:30px 15px;
  }
  @include higherLapTop(){
    margin:30px 20px;
  }
    width: 8%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .undo {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: #FDCF00;
    outline: 2px black solid;
    padding: 0 5px;
    cursor: pointer;
    &:hover {
      background-color: darken(#FDCF00, 5%);
    }
  }
}

@for $i from 2 through 15 {
  .empty#{$i} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -133%;
    > img {
      width: 100%;
      height: auto;
    }
  }
}
.none {
  display: none;
}
</style>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      mark: ["club", "diamond", "spade", "heart"],
      allUndo: [],
      undoNum: 0,
      card: [
        {
          bgi: require("./assets/card/heart/新接龍_紅心A.svg"),
          color: "red",
          mark: "heart",
          num: 1,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心2.svg"),
          color: "red",
          mark: "heart",
          num: 2,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心3.svg"),
          color: "red",
          mark: "heart",
          num: 3,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心4.svg"),
          color: "red",
          mark: "heart",
          num: 4,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心5.svg"),
          color: "red",
          mark: "heart",
          num: 5,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心6.svg"),
          color: "red",
          mark: "heart",
          num: 6,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心7.svg"),
          color: "red",
          mark: "heart",
          num: 7,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心8.svg"),
          color: "red",
          mark: "heart",
          num: 8,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心9.svg"),
          color: "red",
          mark: "heart",
          num: 9,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心10.svg"),
          color: "red",
          mark: "heart",
          num: 10,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心J.svg"),
          color: "red",
          mark: "heart",
          num: 11,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心Q.svg"),
          color: "red",
          mark: "heart",
          num: 12,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/heart/新接龍_紅心K.svg"),
          color: "red",
          mark: "heart",
          num: 13,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊A.svg"),
          color: "red",
          mark: "diamond",
          num: 1,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊2.svg"),
          color: "red",
          mark: "diamond",
          num: 2,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊3.svg"),
          color: "red",
          mark: "diamond",
          num: 3,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊4.svg"),
          color: "red",
          mark: "diamond",
          num: 4,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊5.svg"),
          color: "red",
          mark: "diamond",
          num: 5,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊6.svg"),
          color: "red",
          mark: "diamond",
          num: 6,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊7.svg"),
          color: "red",
          mark: "diamond",
          num: 7,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊8.svg"),
          color: "red",
          mark: "diamond",
          num: 8,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊9.svg"),
          color: "red",
          mark: "diamond",
          num: 9,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊10.svg"),
          color: "red",
          mark: "diamond",
          num: 10,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊J.svg"),
          color: "red",
          mark: "diamond",
          num: 11,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊Q.svg"),
          color: "red",
          mark: "diamond",
          num: 12,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/diamond/新接龍_方塊K.svg"),
          color: "red",
          mark: "diamond",
          num: 13,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花A.svg"),
          color: "black",
          mark: "club",
          num: 1,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花2.svg"),
          color: "black",
          mark: "club",
          num: 2,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花3.svg"),
          color: "black",
          mark: "club",
          num: 3,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花4.svg"),
          color: "black",
          mark: "club",
          num: 4,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花5.svg"),
          color: "black",
          mark: "club",
          num: 5,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花6.svg"),
          color: "black",
          mark: "club",
          num: 6,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花7.svg"),
          color: "black",
          mark: "club",
          num: 7,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花8.svg"),
          color: "black",
          mark: "club",
          num: 8,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花9.svg"),
          color: "black",
          mark: "club",
          num: 9,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花10.svg"),
          color: "black",
          mark: "club",
          num: 10,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花J.svg"),
          color: "black",
          mark: "club",
          num: 11,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花Q.svg"),
          color: "black",
          mark: "club",
          num: 12,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/club/新接龍_梅花K.svg"),
          color: "black",
          mark: "club",
          num: 13,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃A.svg"),
          color: "black",
          mark: "spade",
          num: 1,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃2.svg"),
          color: "black",
          mark: "spade",
          num: 2,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃3.svg"),
          color: "black",
          mark: "spade",
          num: 3,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃4.svg"),
          color: "black",
          mark: "spade",
          num: 4,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃5.svg"),
          color: "black",
          mark: "spade",
          num: 5,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃6.svg"),
          color: "black",
          mark: "spade",
          num: 7,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃7.svg"),
          color: "black",
          mark: "spade",
          num: 7,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃8.svg"),
          color: "black",
          mark: "spade",
          num: 8,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃9.svg"),
          color: "black",
          mark: "spade",
          num: 9,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃10.svg"),
          color: "black",
          mark: "spade",
          num: 10,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃J.svg"),
          color: "black",
          mark: "spade",
          num: 11,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃Q.svg"),
          color: "black",
          mark: "spade",
          num: 12,
          id: Math.random() * 10000
        },
        {
          bgi: require("./assets/card/spade/新接龍_黑桃K.svg"),
          color: "black",
          mark: "spade",
          num: 13,
          id: Math.random() * 10000
        }
      ]
    };
  },
  methods: {
    dragover(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    drop(e) {
      e.stopPropagation();
      const undo = e.dataTransfer.getData("text/plain");
      const {
        mark: origMark,
        num: origNum,
        color: origColor
      } = e.currentTarget.children[0].dataset; //移到該容器,先檢查她最後一張照片的數字和符號
      const [mark, num, color] = undo.split(","); //正在移的數字和符號

      const resultMark = mark !== origMark;
      const tempNum = origNum - num === 1;
      const doneNum = parseInt(origNum) + 1 === parseInt(num);
      const tempColor = color !== origColor;
      const isContainer = e.currentTarget.closest(".card-item"); //證明他的父層上不是在暫存卡牌的容器裡,解決放了一張後不能再放第二章在同個地方
      if (resultMark && tempNum && tempColor && isContainer === null) {
        //正在玩的邏輯
        this.movingDrag(mark, num, e.currentTarget);
      } else if (!resultMark && doneNum && isContainer !== null) {
        //符號相同,數字是逐漸往上加
        this.movingDrag(mark, num, e.currentTarget);
      } else if (
        e.currentTarget.parentElement.className === "card-item" &&
        isContainer !== null
      ) {
        //暫存的邏輯
        this.movingDrag(mark, num, e.currentTarget);
      }
    },
    dragstart(e) {
      e.stopPropagation();
      const classList = e.currentTarget.classList;
      window.setTimeout(() => {
        classList.add("none");
      }, 0);
      const { mark, num, color } = e.target.children[0].dataset;
      e.dataTransfer.setData("text/plain", `${mark},${num},${color}`);
      //類似mousemove時啟動
    },
    /* function drag() {
        類似mouseup時啟動
        console.log('drag')
      } */
    dragend(e) {
      e.stopPropagation();
      e.currentTarget.setAttribute("draggable", false);
      e.currentTarget.classList.remove("none");
      //類似mouseup時啟動
    },
    dragoverTemp(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    dropTemp(e) {
      e.stopPropagation();
      const undo = e.dataTransfer.getData("text/plain");
      const [mark, num] = undo.split(",");
      const drag = document.querySelector(
        `img[data-mark='${mark}'][data-num='${num}']`
      );
      const dragNext = drag.nextElementSibling;
      if (e.currentTarget.children.length === 0 && dragNext === null) {
        //證明暫存卡牌的容器裡目前只有一張卡
        this.movingDrag(mark, num, e.currentTarget);
      }
    },
    dragoverDone(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    dropDone(e) {
      e.stopPropagation();
      const undo = e.dataTransfer.getData("text/plain");
      const [mark, num] = undo.split(",");
      console.log($(e.currentTarget).find("img"));
      console.log($(e.currentTarget).find("img").length);
      if (e.currentTarget.className.split(" ")[1] === mark && num === "1") {
        //要裝在哪個花色的容器
        this.movingDrag(mark, num, e.currentTarget);
      } else if (
        e.currentTarget.className.split(" ")[1] === mark &&
        $(e.currentTarget).find("img").length + 1 === num
      ) {
        this.movingDrag(mark, num, e.currentTarget);
      }
    },
    movingDrag(mark, num, containerDom) {
      const drag = document.querySelector(
        `img[data-mark='${mark}'][data-num='${num}']`
      ).parentElement;
      this.saveUndo(drag.parentElement, drag, containerDom);
      containerDom.appendChild(drag);
    },
    saveUndo(back, element, go) {
      this.undoNum++;
      this.allUndo.push({
        back,
        element,
        go
      });
    },
    undoHandler(e) {
      if (this.allUndo.length === 0) {
        e.preventDefault();
      } else {
        const dataIndex = this.allUndo.length - 1;
        const { back, element, go } = this.allUndo[dataIndex];
        go.removeChild(element);
        back.appendChild(element);
        this.allUndo.splice(dataIndex, 1);
      }
    },
    mousedown(e) {
      //判斷是否可移動,出現影子,用draggable的true/false
      e.stopPropagation();
      let num = [];
      let color = [];
      let colorResult = [];
      let numResult = [];
      const allImg = $(e.currentTarget).find("img");
      for (let i = 0; i < allImg.length; i++) {
        num.push(parseInt(allImg[i].dataset.num));
        color.push(allImg[i].dataset.color);
      }
      color.forEach((e, i, arr) => {
        if (arr[i + 1] === undefined) {
          return false;
        } else {
          colorResult.push(e !== arr[i + 1]);
        }
      });
      const result1 = colorResult.every(e => {
        return e === true;
      });

      num.forEach((e, i, arr) => {
        if (arr[i + 1] === undefined) {
          return false;
        } else {
          numResult.push(e - 1 === arr[i + 1]);
        }
      });

      const result2 = numResult.every(e => {
        return e === true;
      });
      if (result1 && result2) {
        e.currentTarget.setAttribute("draggable", true);
      } else if (color.length === 1 && num.length === 1) {
        e.currentTarget.setAttribute("draggable", true);
      }
    },
    allDom(emptyIndex, dataStart, columnNum) {
      let endContainer = columnNum - 1; //讓最後一次迴圈不要再多增加一個容器
      for (let i = 0; i < columnNum; i++) {
        const { bgi, color, mark, num } = this.card[i + dataStart];
        const img = document.createElement("IMG");
        img.src = bgi;
        img.dataset.color = color;
        img.dataset.mark = mark;
        img.dataset.num = num;
        img.setAttribute("draggable", false);
        const emptyNum = [...document.querySelectorAll(`.empty${i + 1}`)][
          emptyIndex
        ];
        emptyNum.appendChild(img);
        if (i !== endContainer) {
          const div = document.createElement("DIV");
          div.setAttribute("draggable", false);
          div.classList.add(`empty${i + 2}`);
          emptyNum.appendChild(div);
        }
      }
    }
  },
  mounted() {
    this.allDom(0, 0, 7);
    this.allDom(1, 7, 7);
    this.allDom(2, 14, 7);
    this.allDom(3, 21, 7);

    this.allDom(4, 28, 6);
    this.allDom(5, 34, 6);
    this.allDom(6, 40, 6);
    this.allDom(7, 46, 6);

    for (let i = 1; i < 8; i++) {
      [...document.querySelectorAll(`.empty${i}`)].forEach(e => {
        e.addEventListener("dragover", this.dragover);
        /* e.addEventListener("dragenter", this.dragenter);
        e.addEventListener("dragleave", this.dragleave); */
        e.addEventListener("drop", this.drop);

        e.addEventListener("dragstart", this.dragstart);
        e.addEventListener("dragend", this.dragend);
        //e.addEventListener("drag", this.drag);
        e.addEventListener("mousedown", this.mousedown);
        //e.addEventListener("mouseup", this.mouseup);
      });

      [...document.querySelectorAll(".card-temp")].forEach(e => {
        e.addEventListener("dragover", this.dragoverTemp);
        e.addEventListener("drop", this.dropTemp);
      });

      [...document.querySelectorAll(".card-done")].forEach(e => {
        e.addEventListener("dragover", this.dragoverDone);
        e.addEventListener("drop", this.dropDone);
      });
    }
  },
  created() {
    this.card = this.card.sort((a, b) => {
      return a.id - b.id;
    });
  }
};
</script>
