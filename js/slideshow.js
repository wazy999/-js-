let length = 0;
let status = true
let colorindex = 0
function slideshow(id,tag,imgIndex){
    let slide = document.getElementById(id)
    let slideWidth = parseInt(getComputedStyle(slide).width)-8;	//获取slide的宽度
    let slideHeight = parseInt(getComputedStyle(slide).height);	//获取slide的高度，用来动态居中按钮的位置
    let imgnumber = slide.getElementsByTagName(tag).length
    console.log(slideWidth)
    let speed = -5;	//动画速度
    //图片运动
    console.log()
    if(!imgIndex){
        status = false
    }else if(imgIndex == imgnumber-1){
        status = true
    }
    if(status){
     let move = setInterval(() => {
        if(length < slideWidth/imgnumber*imgIndex){
          length -= speed
          slide.style.left = -length + 'px'
        }else{
            if(imgIndex < imgnumber - 1){
             imgIndex++
            }else{
             status = false
            }
            clearInterval(move)
         }
      }, 10);
    }
    if(length >= slideWidth/imgnumber*imgIndex && !status){
        let move1 = setInterval(() => {
          if(length >= slideWidth/imgnumber*imgIndex){
              length += speed
              slide.style.left = -length + 'px'
            }else{
              if(imgIndex == 0){
                status = true
                imgIndex = 2;
              }
              imgIndex--;
              clearInterval(move1)
            }
        }, 10);
        console.log(imgIndex)
    }
    colorindex = imgIndex
}