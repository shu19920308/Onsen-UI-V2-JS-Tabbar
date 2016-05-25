// データ読み込み処理
function createObjects()
{
    var canvasImgFirst = document.getElementById("canvas-captureImageFirst");
    var canvasImgSecond = document.getElementById("canvas-captureImageSecond");
    var videoTagIdMovie = document.getElementById("movie");
    
    var canvas = document.getElementById("draw");
    var ctx = canvas.getContext('2d');
    
    
    // 描画線種類変更メソッド
    $("#black").click(function () 
    {
        alert("ここは入っています");
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = "black";
    });
    $("#blue").click(function () 
    {
        alert("ここは入っています");
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = "blue";
    });
    $("#red").click(function () 
    {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = "red";
    });
    $("#yellow").click(function () 
    {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = "yellow";
    });
    $("#green").click(function () 
    {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = "green";
    });
    
    $("#eraser").click(function () 
    {
        ctx.globalCompositeOperation = 'destination-out';
    });
    
    $("#small").click(function () 
    {
        ctx.lineWidth = 1;
    });
    $("#middle").click(function () 
    {
        ctx.lineWidth = 5;
    });
    $("#large").click(function () 
    {
        ctx.lineWidth = 10;
    });

}

//動画撮影メソッド
function movieshoot()
{   
    
    //<video>タグのid情報をgetElementByIdメソッドを利用して取得
    var videoTagIdMovie = document.getElementById("movie");
    
    //動画キャプチャで取った画像を表示する<canvas>タグのID情報をgetElementByIdメソッドを利用して取得
    var canvasImgFirst = document.getElementById("canvas-captureImageFirst");
    
    //動画キャプチャで取った画像を表示する<canvas>タグのID情報をgetElementByIdメソッドを利用して取得
    var canvasImgSecond = document.getElementById("canvas-captureImageSecond");
    
    //動画を撮影するメソッド宣言
    //capture.captureVideo：ビデオ録画アプリを起動し、キャプチャーしたビデオファイルの情報を返します。
    navigator.device.capture.captureVideo(onSuccessM, onFailM);
    
    /*
    動画撮影し直して動画キャプチャボタンを押すとまた0秒目の画像が表示してしまうので
    動画を撮影することが出来た段階でカウントを0に戻すこと
    */
    captureButtonCount = 0;
    
    //成功時コールバック関数
    function onSuccessM(mediaFiles)
    {
        // スマホの端末の向き情報を取得する処理
        if(window.orientation == 0)
        {
            //縦向き
            alert('portrait：縦向き'); 
            
            
            //window.alert("確認" + canvasImgSecond);
            canvasImgSecond.style.visibility = "visible";
            
            //canvasImgSecond.style.margin = "40px";

            
            //canvasImgSecond.setAttribute("width", 240);
            //canvasImgSecond.setAttribute("height", 180);
            
            //canvasImgSecond.setAttribute("width", 180);
            //canvasImgSecond.setAttribute("height", 240);
            
            //canvasImgSecond.style.transform = "rotate( 90deg )";
            
            //canvasImgSecond.setAttribute("width", 360);
            //canvasImgSecond.setAttribute("height", 240);
            
        } 
        else 
        {
            //横向きのアラート
            alert('landscape：横向き');
            //キャプチャした画像を表示する領域を非表示→表示
            canvasImgSecond.style.display = "";
            canvasImgSecond.setAttribute("width", 360);
            canvasImgSecond.setAttribute("height", 250);
            //領域を回転するプロパティを無効
            canvasImgSecond.style.transform = "";
        }
        
        //<video>タグのid情報をgetElementByIdメソッドを利用して取得
        //var videoTagId = document.getElementById("movie");
        
        /*
        <video>タグのid情報をgetElementByIdメソッドを利用して取得
		var videoTagId = document.getElementById("movie");
        fullPath: ファイルの名前を含むフルパスを表します
        変数pathに撮影した動画のファイルの名前を含むフルパスを変数pathに代入します
        */

        path = mediaFiles[0].fullPath;
        window.alert(path);
		videoTagIdMovie.src = path;
        
        //window.alert(path);
		if(videoTagIdMovie.src == "")
        {
            //動画を非表示
			videoTagIdMovie.style.display = "none";
		}
	}
	//失敗時コールバック関数
	function onFailM(message)
    {
        alert('エラーが発生！' + message);
    }
}


//描画する<canvas>タグのID情報をgetElementByIdメソッドを利用して取得
//var canvasDraw2 = document.getElementById("canvas-draw");
//描画するためのオブジェクトを変数drawContextに代入
//var drawContext = canvasDraw2.getContext("2d");

//var canvas, ctx;
//var canvas = document.getElementById("draw");
//var ctx = canvas.getContext('2d');





//動画キャプチャ関数
function moviecapture()
{
    var videoTagIdCapture = document.getElementById("movie");
    //var captureButtonCount = 0;
    
     //<video>タグのid情報をgetElementByIdメソッドを利用して取得
    var videoTagIdMovie = document.getElementById("movie");
    
    //動画キャプチャで取った画像を表示する<canvas>タグのID情報をgetElementByIdメソッドを利用して取得
    var canvasImgFirst = document.getElementById("canvas-captureImageFirst");
    
    //動画キャプチャで取った画像を表示する<canvas>タグのID情報をgetElementByIdメソッドを利用して取得
    var canvasImgSecond = document.getElementById("canvas-captureImageSecond");
    

    
    captureButtonCount++;
    if(captureButtonCount !== 1)
    {
        var ctxSecond = canvasImgSecond.getContext("2d");
        
        window.alert("高さ" + videoTagIdCapture.videoWidth);
        window.alert("幅" + videoTagIdCapture.videoHeight);
        
        //ctxSecond.drawImage(videoTagIdCapture, 0, 0, videoTagIdCapture.videoWidth , videoTagIdCapture.videoHeight - 150, 0,  0, 240, 180);
        //ctxSecond.drawImage(videoTagIdCapture, 0, 0, 360, 300, 0,  0, 240, 180);
        //ctxSecond.drawImage(videoTagIdCapture, 0, 0, videoTagIdCapture.videoWidth, videoTagIdCapture.videoHeight, 0,  0, 240, 180);
        ctxSecond.drawImage(videoTagIdCapture, 0, 0, videoTagIdCapture.videoWidth, videoTagIdCapture.videoHeight, 0,  0, 240, 240);
        //ctxSecond.drawImage(videoTagIdCapture, 0, 0, videoTagIdCapture.videoWidth, videoTagIdCapture.videoHeight, 0,  0, 240, 150);
        
        //canvasDraw2.style.display = "";
        canvas.style.visibility = "visible";
        
    }
    else
    {
        window.alert("確認1");
        var ctxFirst = canvasImgFirst.getContext("2d");
        ctxFirst.drawImage(videoTagIdCapture, 0, 0, videoTagIdCapture.videoWidth, videoTagIdCapture.videoHeight, 0,  0, 240, 180);
        //ctxFirst.drawImage(videoTagIdCapture, 0, 0, videoTagIdCapture.videoWidth, videoTagIdCapture.videoHeight, 0,  0, 240, 150);
        //canvas.style.visibility = "visible";
        moviecapture();
    } 
}


