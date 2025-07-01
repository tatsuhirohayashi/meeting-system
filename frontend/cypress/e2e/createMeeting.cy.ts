describe("会議作成 → 一覧に表示される", () => {
    it("フォーム送信後に正しく反映される", () => {
        // 会員登録
        cy.visit("/signup")

        //名前リスト
        const familyNames = [
            "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson", "White"
        ];
        const givenNames = [
            "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda"
        ];

        // ランダムに姓と名を選択
        const familyName = familyNames[Math.floor(Math.random() * familyNames.length)];
        const givenName = givenNames[Math.floor(Math.random() * givenNames.length)];
        const fullName = `${familyName} ${givenName}`;

        // ランダムなメールアドレス
        const email = `${fullName}@example.com`;

        //会員の情報入力
        cy.get('input[placeholder="user name"]').type(fullName);
        cy.get('input[placeholder="email"]').type(email);
        cy.get('input[placeholder="password"]').type("password");
        cy.get('input[placeholder="confirm password"]').type("password");

        //会員の情報送信
        cy.contains("button", "Register").click();

        // 会議作成ページにアクセス
        cy.contains("Create").click();
        cy.url().should("include", "/meeting/create");
        // cy.visit("/meetings/create");

        // 会議の情報入力
        cy.get('input[placeholder="申込日"]').type("6月11日");
        cy.get('input[placeholder="申込者"]').type(fullName);
        cy.get('input[placeholder="相談概要"]').type("面談について");
        cy.get('textarea[placeholder="相談内容"]').type("詳細内容です");

        // 会議の情報送信
        cy.contains("button", "Create Meeting").click();

        // 遷移を確認
        cy.url().should("include", "/meeting");

        // 一覧に新しい会議が表示されているか確認
        cy.contains("6月11日").should("exist");
        cy.contains(fullName).should("exist");
        cy.contains("面談について").should("exist");
    });
});