export function miniAppInitializer() {
    window.miniapp = new window.hamromini_sdkjs.MiniApp();
  
    return new Promise(async (resolutionFunc, rejectionFunc) => {
      try {
        let userDetails = await window.hamromini_sdkjs.initialize(
          "test-ma-2",
          window.miniapp
        );
        resolutionFunc(userDetails);
      } catch (e) {
        rejectionFunc(e);
      }
    });
  }