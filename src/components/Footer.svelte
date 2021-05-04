<footer>
    <div>
        <a href="https://github.com/HeropCode/Svelte-Movie-app"
            >Github report.</a
        >
    </div>
    <div>
        <a href="https://github.com/HeropCode/Svelte-Movie-app"
            >@{new Date().getFullYear()} Heropy</a
        >
    </div>
</footer>

<style lang="scss">
    footer {
        padding: 70px;
        text-align: center;
        a {
            color: $color--white-10;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>
