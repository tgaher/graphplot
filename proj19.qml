import QtQuick 2.0





Rectangle {
    width: 360
    height: 360

    TextEdit
    {
        anchors.centerIn: parent
        text: "Enter here"
    }
    //going to use qt canvas

    Canvas
    {
        id: mycanvas
        width: 100
        height: 200
    }

}


