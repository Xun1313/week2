<template>
  <div id="app">
    <div class="all-card">
      <div class="empty">
        <template v-for="(item,index) in card">
          <template v-if="index<=6">
            <!--  -->
            <img :src="item.bgi" class="fill" alt draggable="true" />
          </template>
        </template>
      </div>

      <div class="empty">
        <template v-for="(item,index) in card">
          <template v-if="index>=7&&index<=13">
            <img :src="item.bgi" class="fill" alt draggable="true" />
          </template>
        </template>
      </div>

      <div class="empty">
        <template v-for="(item,index) in card">
          <template v-if="index>=14&&index<=20">
            <img :src="item.bgi" class="fill" alt draggable="true" />
          </template>
        </template>
      </div>

      <div class="empty">
        <template v-for="(item,index) in card">
          <template v-if="index>=21&&index<=27">
            <img :src="item.bgi" class="fill" alt draggable="true" />
          </template>
        </template>
      </div>

      <div class="empty">
        <template v-for="(item,index) in card">
          <template v-if="index>=28&&index<=33">
            <img :src="item.bgi" class="fill" alt draggable="true" />
          </template>
        </template>
      </div>

      <div class="empty">
        <template v-for="(item,index) in card">
          <template v-if="index>=34&&index<=39">
            <img :src="item.bgi" class="fill" alt draggable="true" />
          </template>
        </template>
      </div>

      <div class="empty">
        <template v-for="(item,index) in card">
          <template v-if="index>=40&&index<=45">
            <img :src="item.bgi" class="fill" alt draggable="true" />
          </template>
        </template>
      </div>

      <div class="empty">
        <template v-for="(item,index) in card">
          <template v-if="index>=46&&index<=51">
            <img :src="item.bgi" class="fill" alt draggable="true" />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/_variable.scss';
.all-card {
  display: flex;
  justify-content: center;
  overflow:hidden;
  height: 100vh;
  background-color:$background ;
  .empty {
    display: flex;
    flex-direction: column;
    width: 8%;
    margin: 200px 10px;
    img {
      position: relative;
      left: 0;
      width: 100%;
      height: auto;
    }
    @for $i from 2 through 20 {
      img:nth-child(#{$i}) {
        bottom: 65.6% *$i;
        //transform:translateY(-11.3% * $i) ;
      }
    }
    img:first-child {
      //transform: translateY(-11%)
      bottom: 65%;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
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
      e.preventDefault();
      //console.log("dragover");
      console.log(e);
    },
    dragenter(e) {
      //e.preventDefault()
      e.currentTarget.classList.add("hovered");
      //console.log('dragenter')
    },
    dragleave(e) {
      e.currentTarget.classList.remove("hovered");
      //console.log('dragleave')
    },
    drop(e) {
      //this.appendChild(fill[1]);
      //console.log('drop')
    },
    dragstart() {
      //類似mousemove時啟動
      console.log("start");
      //this.classList.add("hold");
      //hold是內容的邊框有顏色

      setTimeout(() => {
        //this.classList.add("invisible");
        //invisible是隱藏起來
      }, 0);
    },
    /* function drag() {
        類似mouseup時啟動
        console.log('drag')
      } */
    dragend() {
      //類似mouseup時啟動
      console.log("end");
      //this.classList.remove("invisible", "hold");
    }
  },
  mounted() {
    const empties = document.querySelectorAll(".empty");
    const fill = [...document.querySelectorAll(".fill")];

    empties.forEach(e => {
      e.addEventListener("dragover", this.dragover);
      e.addEventListener("dragenter", this.dragenter);
      e.addEventListener("dragleave", this.dragleave);
      e.addEventListener("drop", this.drop);
    });

    fill.forEach(e => {
      e.addEventListener("dragstart", this.dragstart);
      e.addEventListener("dragend", this.dragend);
      /* e.addEventListener('drag', drag) */
    });

    /* function drag() {
        類似mouseup時啟動
        console.log('drag')
      } */
  }
};
</script>


<style lang="scss">
</style>
