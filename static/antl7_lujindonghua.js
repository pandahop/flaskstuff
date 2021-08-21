const scene = new L7.Scene({
    id: 'map',
    map: new L7.GaodeMap({
        style: 'dark', // 样式URL
        center: [120.19382669582967, 30.258134],
        pitch: 0,
        zoom: 12,
        token: '高德地图token',

    }),

});
scene.on('loaded', () => {
    fetch(
        'https://gw.alipayobjects.com/os/basement_prod/40ef2173-df66-4154-a8c0-785e93a5f18e.json'
    )
        .then(res => res.json())
        .then(data => {
            const layer = new LineLayer()
                .source(data)
                .size(1.5)
                .shape('line')
                .color('#25d8b7')
                .animate({
                    interval: 1, // 间隔
                    duration: 1, // 持续时间，延时
                    trailLength: 2 // 流线长度
                });
            scene.addLayer(layer);
        });
});
