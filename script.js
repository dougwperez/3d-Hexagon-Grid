const canvas = document.getElementById("renderCanvas"); // Get the canvas element
        const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        // Add your code here matching the playground format
        const createScene = function () {

            const scene = new BABYLON.Scene(engine);

            BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "hexTile.glb");

            const camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(45), 10, BABYLON.Vector3.Zero(), scene);

             camera.lowerRadiusLimit = 5;

            camera.attachControl(canvas, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

            return scene;
        };

        const scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
                scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
                engine.resize();
                scene.render();
        });