package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "blit/testutil/keeper"
	"blit/x/script/keeper"
	"blit/x/script/types"
)

func setupMsgServer(t testing.TB) (keeper.Keeper, types.MsgServer, sdk.Context) {
	k, ctx := keepertest.ScriptKeeper(t)
	return k, keeper.NewMsgServerImpl(k), ctx
}

func TestMsgServer(t *testing.T) {
	k, ms, ctx := setupMsgServer(t)
	require.NotNil(t, ms)
	require.NotNil(t, ctx)
	require.NotEmpty(t, k)
}
