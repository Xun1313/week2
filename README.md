'內容'要設draggable
'容器'可以不用設定

'內容'不用指定我現在要移動哪個,有設draggable true的並且靠e. currentTarget調整
'容器'要指定要把內容放在哪裡


(1)最上面父層的draggable設成true
(2)最上面的父層之下的element全部都要設成draggable false
※以上這樣才能真的拖曳
(3)
多個'容器'彼此有重疊
多個'內容'彼此有重疊
趕快把相關事件全部都stopPropagation()
(4)
'容器'事件的e. currentTarget
有propagation一定會是我想要點到的容器element
'內容'事件的e. currentTarget
有stopPropagation一定會是我想要點到的內容element
(5)
容器的事件
//e. currentTarget是我真正按到的容器哦

dragover
//一移動就瘋狂觸發
//類似mousemove
dragenter
//一移動先觸發一次,之後進到別的容器立刻觸發一次
//可用在進入別人的容器時加class
dragleave
//一移動離開自己的容器觸發一次,之後進到別的容器再離開後又觸發一次
//可用在離開別人的容器時加class
drop
//把dragover設preventDefault才有
//一放開滑鼠就觸發
//類似mouseup

內容的事件
//e. currentTarget是我真正按到的內容哦

dragstart
//一移動只觸發一次,之後不觸發
dragend
//滑鼠一放開就觸發
//類似mouseup
drag
//ㄧ移動瘋狂觸發
//類似mousemove

*缺少類似mousedown的

(6)必須有的事件是
drop和dragover

(7)
dragstart event時候
e. dataTransfer. setData('text/plain',這裡只能放字串吧)
放text/html失敗
好像只能放一個值
所以字串逗點拼起來

drop event時候
e. datatransfer. getData('text/plain')
split出來

(8)
'內容'

移動成功
e. currentTarget底下自動不見
//代表在drop時有appendChild

移動失敗
留在原地


'容器'

移動成功
必須用appendChild指定放在哪裡

移動失敗
沒差

(9)ㄧ移動只有影子會動,若想要原本的東西先消失
dragstart
setTimeout(
  e. currentTarget. classList. add('none')
,0)
//因為dragstart太靈敏,用非同步停以下

dragend
不管最後停在哪裡都要解除隱藏
e. currentTarget. classList. remove('none')
(10)處理ghost image好像是e. dataTransfer. setDragImage()
(11)
link和image的draggable預設是true
