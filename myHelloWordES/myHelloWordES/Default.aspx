<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="myHelloWordES.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <%--<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.js"></script>--%>
    <%--<script src="Controller/Core/CRegister.js"></script>--%>

    <script src="Views/Register.js"></script>
    <%--<script src="Controller/Register.js"></script>--%>
    <%--<script src="a.bundle.js"></script>--%>
    <script src="b.bundle.js"></script>
    <title></title>
</head>
<body>
    <ext:ResourceManager runat="server" Theme="Triton" />
    <ext:Viewport runat="server" ID="regPage" ItemID="regPage">
        <LayoutConfig>
            <ext:VBoxLayoutConfig Align="Center" Pack="Center" />
        </LayoutConfig>

        <Listeners>
            <AfterRender Handler="App.Register.render();"></AfterRender>
        </Listeners>
    </ext:Viewport>
</body>
</html>
