class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        // top two heights for each node
        const dp = Array.from({ length: n }, () => [0, 0]);

        const dfs = (node, parent) => {
            for (const nei of adj[node]) {
                if (nei === parent) continue;
                dfs(nei, node);
                const curHgt = 1 + dp[nei][0];
                if (curHgt > dp[node][0]) {
                    dp[node][1] = dp[node][0];
                    dp[node][0] = curHgt;
                } else if (curHgt > dp[node][1]) {
                    dp[node][1] = curHgt;
                }
            }
        };

        const dfs1 = (node, parent, topHgt) => {
            if (topHgt > dp[node][0]) {
                dp[node][1] = dp[node][0];
                dp[node][0] = topHgt;
            } else if (topHgt > dp[node][1]) {
                dp[node][1] = topHgt;
            }

            for (const nei of adj[node]) {
                if (nei === parent) continue;
                const toChild =
                    1 +
                    (dp[node][0] === 1 + dp[nei][0]
                        ? dp[node][1]
                        : dp[node][0]);
                dfs1(nei, node, toChild);
            }
        };

        dfs(0, -1);
        dfs1(0, -1, 0);

        let minHgt = n;
        const res = [];
        for (let i = 0; i < n; i++) {
            minHgt = Math.min(minHgt, dp[i][0]);
        }
        for (let i = 0; i < n; i++) {
            if (minHgt === dp[i][0]) {
                res.push(i);
            }
        }
        return res;
    }
}