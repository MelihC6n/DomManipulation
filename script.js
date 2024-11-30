const applyStylesButton = document.getElementById("applyStyles");
      let actionButton = HTMLButtonElement;

      applyStylesButton.addEventListener("click", () => {
        const container = document.getElementById("container");
        const header = document.getElementById("header");
        const pageTitle = document.getElementById("page_title");
        const content = document.getElementById("content");
        const footer = document.getElementById("footer");

        // Container
        container.style.width = "80%";
        container.style.margin = "auto";
        container.style.background = "linear-gradient(45deg, #6a0572, #2d6a4f)";
        container.style.color = "white";
        container.style.borderRadius = "15px";
        container.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";

        // Header
        header.style.backgroundColor = "#9d4edd";
        header.style.color = "#fff";
        header.style.fontSize = "1.8em";
        header.style.fontWeight = "bold";
        header.style.padding = "20px";
        header.style.borderRadius = "10px";
        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";

        // Header Logo
        const logoContainer = document.createElement("div");
        logoContainer.classList.add("logo-container");
        logoContainer.style.display = "flex";
        logoContainer.style.alignItems = "center";

        const logo = document.createElement("span");
        logo.classList.add("logo");
        logo.textContent = "M";
        logo.style.padding = "10px 12px";
        logo.style.backgroundColor = "#4caf50";
        logo.style.borderRadius = "50%";
        logo.style.marginRight = "10px";
        logoContainer.appendChild(logo);

        const title = document.createElement("div");
        title.textContent = "Logo ve Başlık";
        logoContainer.appendChild(title);

        const button = document.createElement("button");
        button.id = "actionButton";
        button.textContent = "Butona Tıkla";
        button.style.padding = "10px 15px";
        button.style.backgroundColor = "#4caf50";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";

        header.innerHTML = "";
        header.appendChild(logoContainer);
        header.appendChild(button);

        // Sayfa Başlığı
        pageTitle.style.backgroundColor = "#48cae4";
        pageTitle.style.color = "#fff";
        pageTitle.style.fontSize = "1.5em";
        pageTitle.style.textAlign = "center";
        pageTitle.style.padding = "20px";
        pageTitle.style.marginBottom = "15px";
        pageTitle.style.borderRadius = "10px";
        pageTitle.textContent = "Sayfa Başlığı - Hoş Geldiniz";

        // İçerik
        content.style.backgroundColor = "#ffdd00";
        content.style.color = "#000";
        content.style.fontSize = "1.2em";
        content.style.padding = "20px";
        content.style.marginBottom = "15px";
        content.style.borderRadius = "10px";

        const contentList = content.querySelector("ul");
        contentList.innerHTML = `
            <li>Ekstra birşey daha görmek istiyorsanız sağ yukarıdaki butona basınız !!!</li>
            <li>DOM manipülasyonu ile elementlerin stilleri ayarlanabilir.</li>
            <li>Yeni elementler eklenebilir.</li>
            <li>Mevcu elementler silinebilir.</li>
            <li>Kısaca sayfa DOM ile güncellenebilir.</li>
        `;

        // Footer
        footer.style.backgroundColor = "#457b9d";
        footer.style.color = "#fff";
        footer.style.textAlign = "center";
        footer.style.padding = "20px";
        footer.style.borderRadius = "10px";
        footer.textContent = "Alt Bilgi Alanı - 2024 ©";

        applyStylesButton.textContent = "Stiller Uygulandı";
        applyStylesButton.disabled = true;
        applyStylesButton.style.backgroundColor = "gray";

        actionButton = document.getElementById("actionButton");
        actionButton.addEventListener("click", () => {
          const surpriseDiv = document.createElement("div");
          surpriseDiv.textContent =
            "Butona tıklandı! DOM manipülasyonu ile event listenerlar eklenip, kaldırılabilir!!";
          surpriseDiv.style.backgroundColor = "#ff6f61";
          surpriseDiv.style.color = "#fff";
          surpriseDiv.style.padding = "10px";
          surpriseDiv.style.marginTop = "10px";
          surpriseDiv.style.borderRadius = "5px";
          surpriseDiv.classList.add("surprise");

          if (!document.querySelector(".surprise")) {
            content.appendChild(surpriseDiv);
          } else {
            alert("İçerik zaten eklendi!");
          }
        });
      });