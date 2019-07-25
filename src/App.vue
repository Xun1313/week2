<template>
  <div id="app">
    <div class="all-card">
      <div class="card-container">
        <div class="card-item" v-for="(item, index) in 4" :key="index+87">
          <div class="card-temp"></div>
        </div>

        <div class="card-item" v-for="(item, index) in 4" :key="index-87">
          <div class="card-icon"></div>
          <div class="card-done"></div>
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
  @include lapTop() {
    margin-right: 10px !important;
  }
}
.empty1:nth-child(5),
.card-item:nth-child(5) {
  margin-left: auto !important;
  @include lapTop() {
    margin-left: 10px !important;
  }
}
.card-container {
  display: flex;
  width: 100%;
  //justify-content: center;
  .card-item {
    width: 10%;
    height: 0;
    padding-bottom: 15.6%;
    background-color: $cache;
    margin: 0 10px;
    position: relative;
    > .card-temp,
    > .card-done {
      position: absolute;
      width: 100%;
      height: 100%;
      > div {
        margin-top: 0;
      }
    }
  }
}

/* @each $name, $val in $bgi {
  .card-item:nth-child(#{$name + 4}) > .card-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 45px;
    height: 45px;
    @include bg();
    background-image: url("../src/assets/card/"+$val+"/"+$val+".svg");
  }
} */

.all-card {
  display: flex;
  flex-direction: column;
  //justify-content: center;
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
  /* img:first-child {
    bottom: 65%;
  } */
}
.empty {
  display: flex;
  width: 100%;
  //justify-content: center;
  .empty1 {
    margin: 30px 10px;
    //margin-top: 200px;
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

@for $i from 2 through 15 {
  .empty#{$i} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -133%;
    /* bottom: 5%*$i;
    position: relative;
    left: 0; */
    > img {
      width: 100%;
      height: auto;
    }
  }
}
.none {
  display: none;
}
.test {
  width: 100%;
  height: auto;
  background-color: purple;
}
</style>

<script>
import $ from "jquery";
import { log } from "util";
export default {
  data() {
    return {
      undo: "",
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
          //bgi: require("./assets/card/heart/新接龍_紅心.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
          //bgi: require("./assets/card/diamond/新接龍_方塊.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
          //bgi: require("./assets/card/diamond/新接龍_方塊.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
          //bgi: require("./assets/card/club/新接龍_梅花.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
          //bgi: require("./assets/card/club/新接龍_梅花.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
          //bgi: require("./assets/card/club/新接龍_梅花9.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
          //bgi: require("./assets/card/club/新接龍_梅花.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
          //bgi: require("./assets/card/spade/新接龍_黑桃.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
          color: "black",
          mark: "spade",
          num: 1,
          id: Math.random() * 10000
        },
        {
          //bgi: require("./assets/card/spade/新接龍_黑桃.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
          //bgi: require("./assets/card/spade/新接龍_黑桃.svg"),
          bgi: "http://lorempixel.com/150/300/cats",
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
      //console.log(this.childNodes);
      e.stopPropagation();
      e.preventDefault();
      console.log("dragover");
      //console.log(e);
    },
    dragenter(e) {
      e.stopPropagation();
      //e.preventDefault()
      //e.currentTarget.classList.add("hovered");
      console.log("dragenter");
    },
    dragleave(e) {
      e.stopPropagation();
      //e.currentTarget.classList.remove("hovered");
      console.log("dragleave");
    },
    drop(e) {
      e.stopPropagation();
      const undo = e.dataTransfer.getData("text/plain");
      const {
        mark: origMark,
        num: origNum
      } = e.currentTarget.children[0].dataset;
      const [mark, num] = undo.split(",");
      console.log(origMark, origNum, mark, num);

      const resultMark = mark !== origMark;
      const resultNum = origNum - num === 1;
      const isContainer = e.currentTarget.closest(".card-item"); //證明他的父層上不是在暫存卡牌的容器裡
      if (resultMark && resultNum && isContainer === null) {
        const drag = document.querySelector(
          `img[data-mark='${mark}'][data-num='${num}']`
        ).parentElement;
        e.currentTarget.appendChild(drag);
      }
      console.log("drop");
    },
    dragstart(e) {
      e.stopPropagation();
      const classList = e.currentTarget.classList;
      window.setTimeout(() => {
        classList.add("none");
      }, 0);
      const { mark, num } = e.target.children[0].dataset;
      e.dataTransfer.setData("text/plain", `${mark},${num}`);
      //類似mousemove時啟動
      console.log("start");
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
      console.log(e.currentTarget.children.length);
      if (e.currentTarget.children.length > 0 && dragNext !== null) {
        //證明暫存卡牌的容器裡目前只有一張卡
        return false;
      } else {
        const emptyNum = drag.parentElement;
        e.currentTarget.appendChild(emptyNum);
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
      //console.log(color,num,colorResult,numResult,result1,result2);
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
        e.addEventListener("drop", this.dropTempDone);
      });
      /* [...document.querySelectorAll(`.empty${i} img`)].forEach(e=>{
        e.addEventListener("keydown", this.keydown);
        e.addEventListener("keyup", this.keyup);
      }) */
    }

    /* empty1.forEach(e => {
      e.addEventListener("dragover", this.dragover);
      e.addEventListener("dragenter", this.dragenter);
      e.addEventListener("dragleave", this.dragleave);
      e.addEventListener("drop", this.drop);
    }); */

    /* fill.forEach(e => {
      e.addEventListener("dragstart", this.dragstart);
      e.addEventListener("dragend", this.dragend);
      e.addEventListener('drag', this.drag)
    }); */
  },
  created() {
    this.card = this.card.sort((a, b) => {
      return a.id - b.id;
    });
  }
};
</script>
